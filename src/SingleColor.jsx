import React from "react"
import { toast } from "react-toastify"

function SingleColor({ color, index, numColors }) {
  const { hex, weight } = color
  async function copyColor() {
    if (navigator.clipboard) {
      const hexString = "#" + hex
      try {
        await navigator.clipboard.writeText(hexString)
        toast.success(hexString + " copied to clipboard")
      } catch (error) {
        console.log(error.message)
        toast.error(error.message)
      }
    } else {
      toast.error("Clipboard blocked")
    }
  }
  return (
    <article
      className={
        index > numColors / 2 ? "color color-light" : "color color-dark"
      }
      style={{ background: `#${hex}` }}
      onClick={copyColor}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hex}</p>
    </article>
  )
}
export default SingleColor
