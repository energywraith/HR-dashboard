import { useState, useEffect } from "react"

const FormInputGroup = ({ stateValue, setStateValue, type, label, placeholder, note, className, failedValidation }) => {
  const inputId = label.replace(/\s/g, '').toLowerCase()

  return (
    <div className={`form-group ${typeof(className) !== 'undefined' ? className : ''}`}>
      <label htmlFor={inputId} className={failedValidation && 'text-danger'}> {label} </label>
      <input type={type ? type : 'text'}
        id={inputId}
        className={`form-control ${failedValidation ? 'border border-danger' : ''}`}
        placeholder={placeholder}
        value={stateValue}
        onChange={e => setStateValue(e.target.value)}
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