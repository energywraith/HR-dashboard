import { useState, useEffect } from "react"

const FormInputGroup = ({ setStateValue, label, placeholder, note, className, failedValidation }) => {
  const [inputValue, setInputValue] = useState('')
  const inputId = label.replace(/\s/g, '').toLowerCase()

  const handleInputChange = (e) => {
    const value = e.target.value

    setInputValue(value)
    setStateValue(value)
  }

  return (
    <div className={`form-group ${typeof(className) !== 'undefined' ? className : ''}`}>
      <label htmlFor={inputId} className={failedValidation && 'text-danger'}> {label} </label>
      <input type="text" 
        id={inputId}
        className={`form-control ${failedValidation ? 'border border-danger' : ''}`}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
      />
      <small className={`form-text ${failedValidation ? 'text-danger' : 'text-muted'}`}>
        {failedValidation
          ? failedValidation
          : note && note
        }
      </small>
    </div>
  )
}

export default FormInputGroup