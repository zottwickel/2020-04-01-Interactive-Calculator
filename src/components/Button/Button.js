import React from 'react'
import './Button.css'

function Button({text, id, handleClick}) {
  return (
    <button className='button' id={id} onClick={e => handleClick(text)}>{text}</button>
  )
}

export default Button;