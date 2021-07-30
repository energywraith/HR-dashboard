import { useState } from "react"
import axios from "axios"
import FormInputGroup from "../FormInputGroup"

const RegisterForm = ({ formClassName }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [validationErrors, setValidationErrors] = useState([])

  const registerHandle = async (event) => {
    event.preventDefault()

    try {
      await axios.post('/register', {
        name, email, password,
        'password_confirmation': passwordConfirm
      })
      window.location.href = '/dashboard'
    } catch (error) {
      let errors = error.response.data.errors
      setValidationErrors(errors)
    }
  }

  console.log(validationErrors)

  return (
    <form onSubmit={registerHandle} className={formClassName}>
      <FormInputGroup label='Name'
        stateValue={name}
        setStateValue={setName}
        failedValidation={validationErrors.name}        
      />
      <FormInputGroup label='Email'
        stateValue={email}
        setStateValue={setEmail}
        failedValidation={validationErrors.email}
        type='email'   
      />
      <FormInputGroup label='Password'
        stateValue={password}
        setStateValue={setPassword}
        failedValidation={validationErrors.password}    
        type='password'
      />
      <FormInputGroup label='Confirm password'
        stateValue={passwordConfirm}
        setStateValue={setPasswordConfirm}
        type='password'
      />
      <button type='submit' className='btn btn-primary'> Register </button>
    </form>
  )
}

export default RegisterForm