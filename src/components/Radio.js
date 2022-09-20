import React from 'react'

const Radio = ({ type, name, value, onChange, title }) => {
  return (
    <div>
        <label>{title}</label>
        <input type={type} name={name} onChange={onChange} value={value} title={title} />
    </div>
  )
}

export default Radio
