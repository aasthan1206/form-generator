import React from 'react'

const Text = ({ type, name, onChange, id, className, flex }) => {
  //let isFlex = flex===true ? 'applyFlex' : 'noFlex';
  return (
    <div className={`${className} ${flex===true && 'applyFlex'} `}>
      <input type={type} name={name} onChange={onChange} id={id} className={className} />
    </div>
  )
}

export default Text
