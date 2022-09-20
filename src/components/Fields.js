const Fields = ({ type, name, value, onChange, id }) => {
  return (
    <div>
      <input type={type} name={name} value={value} onChange={onChange} id={id}/>
    </div>
  )
}

export default Fields
