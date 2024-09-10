const Select = () => {
  return (
    <div className="input-container">
    <label htmlFor={id}>{label}</label>
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
    />
    {error && <p className="error">{error}</p>}
  </div>
  )
}

export default Select