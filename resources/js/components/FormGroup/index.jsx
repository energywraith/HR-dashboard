const FormGroup = ({ inputValue, setInputValue, label, placeholder, note, className }) => {
  const inputId = label.replace(/\s/g, '').toLowerCase()

  return (
    <div className={`form-group ${className}`}>
      <label htmlFor={inputId}> {label} </label>
      <input type="text" 
        id={inputId}
        className="form-control"
        placeholder={placeholder}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      {note &&
        <small className="form-text text-muted">
          {note}
        </small>
      }
    </div>
  )
}

export default FormGroup