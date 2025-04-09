import React, { useState } from "react"
import ColorList from "./ColorList"
import Form from "./Form"
import Values from "values.js"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const App = () => {
  const percentStep = 10
  const [colors, setColors] = useState(new Values("#3a529c").all(percentStep))

  function addColor(color) {
    try {
      setColors(new Values(color).all(percentStep))
    } catch (error) {
      console.log(error.message)
      toast.error(error.message)
    }
  }

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position='top-center' />
    </main>
  )
}
export default App
