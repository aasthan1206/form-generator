import React from 'react'

const Button = ({ type, id, value, title, onClick }) => {
  return (
    <div>
      <button type={type} id={id} value={value} title={title} onClick={onClick}>{title}
      </button>
    </div>
  )
}

export default Button
