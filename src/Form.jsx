import React, { useState } from "react"

function Form({ addColor }) {
  const [color, setColor] = useState("#3a529c")
  function handleSubmit(e) {
    e.preventDefault()
    addColor(color)
  }
  return (
    <section className='container'>
      <h4>color generator</h4>
      <form className='color-form' onSubmit={handleSubmit}>
        <input
          type='color'
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type='text'
          name='color'
          id='color'
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder={color}
        />
        <button type='submit' className='btn' style={{ background: color }}>
          generate
        </button>
      </form>
    </section>
  )
}
export default Form
