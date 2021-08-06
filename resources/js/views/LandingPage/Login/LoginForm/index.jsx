import React, { useState } from 'react';
import axios from 'axios';
import FormInputGroup from "../../../../components/FormInputGroup"

const LoginForm = ({ formClassName }) => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [validationErrors, setValidationErrors] = useState([])

  const loginHandle = async (event) => {
    event.preventDefault()

    try {
      await axios.post('/login', { email: name, password: password })
      window.location.href = '/dashboard'
    } catch (error) {
      let errors = error.response.data.errors
      setValidationErrors(errors)
    }
  }
  
  return (
    <form onSubmit={loginHandle} className={formClassName}>
      <FormInputGroup label='Email'
        stateValue={name}
        setStateValue={setName}
        failedValidation={validationErrors.email}
      />

      <FormInputGroup label='Password'
        stateValue={password}
        setStateValue={setPassword}
        failedValidation={validationErrors.password}
        type='password'
      />

      <button type='submit' className='btn btn-primary'> Login </button>
    </form>
  )
}

export default LoginForm