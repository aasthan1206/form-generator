import React from 'react'

const Password = ( {type, name, onChange, className, flex} ) => {
  //let isFlex = flex===true ? 'applyFlex' : 'noFlex';
  return (
    <div className={`${className} ${flex===true && 'applyFlex'} `}>
      <input type={type} name={name} onChange={onChange} className={className} />
    </div>
  )
}

export default Password
