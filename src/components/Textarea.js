import React from 'react'

const Textarea = ( {type, id, name, onChange, className, flex } ) => {
  //let isFlex = flex===true ? 'applyFlex' : 'noFlex';
  return (
    <div className={`${className} ${flex===true && 'applyFlex'} `}>
      <input type={type} id={id} name={name} onChange={onChange}   />
    </div>
  )
}

export default Textarea
