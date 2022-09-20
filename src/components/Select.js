import React from 'react'
const Option = ( { value, title }) => {
  return (
    <option value={value}>{title}</option>
  )
}
const Select = ({ type, name, onChange, options }) => {
  return (
    <div>
      <select type={type} name={name} onChange={onChange}>
        {options.map((option, index)=><Option key={index} value={option.value} title={option.title} />)}
      </select>
    </div>
  )
}

export default Select
