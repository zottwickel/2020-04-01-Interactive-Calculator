import React from 'react'
import './Screen.css'

function Screen({screenText}) {
  return (
    <div className='screen'>
      <p className='screen-text'>{screenText}</p>
    </div>
  )
}

export default Screen
