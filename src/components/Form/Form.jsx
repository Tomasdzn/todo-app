import React, { useState } from 'react'
import './Form.css'

const Form = ({ addTask }) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(inputText)
    setInputText('')
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder='Add some text...'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button type='submit'>
        Add
      </button>
    </form>
  )
}

export default Form