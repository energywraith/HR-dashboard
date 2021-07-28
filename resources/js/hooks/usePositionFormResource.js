import { useState } from 'react'
import axios from "axios"

const usePositionFormResource = (company, positions, setPositions, closeForm) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [seniority, setSeniority] = useState('all')
  const [salaryFrom, setSalaryFrom] = useState('')
  const [salaryTo, setSalaryTo] = useState('')
  const [salaryCurrency, setSalaryCurrency] = useState('')
  const [responsibilities, setResponsibilities] = useState([])
  const [expectations, setExpectations] = useState([])
  const [niceToHave, setNiceToHave] = useState([])
  const [benefits, setBenefits] = useState([])
  const [validationErrors, setValidationErrors] = useState({})

  const clearForm = () => {
    setName('')
    setDescription('')
    setLocation('')
    setSeniority('all')
    setSalaryFrom('')
    setSalaryTo('')
    setSalaryCurrency('')
    setResponsibilities([])
    setExpectations([])
    setNiceToHave([])
    setBenefits([])
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    const newPosition = {
      name,
      description,
      location,
      company_id: parseInt(company.id),
      salary_range: {
        from: parseInt(salaryFrom),
        to: parseInt(salaryTo),
        currency: salaryCurrency
      },
      seniority,
      responsibilities,
      expectations,
      nice_to_have: niceToHave,
      benefits,
    }

    try {
      const response = await axios.post('/api/position', { ...newPosition })
      setValidationErrors({})
      setPositions([ ...positions, response.data ])
      clearForm()
      closeForm()
    } catch (error) {
      let errors = error.response.data.errors
      setValidationErrors(errors)
    }
  }

  return {
    formStates: {
      name, setName,
      description, setDescription,
      location, setLocation,
      seniority, setSeniority,
      salaryFrom, setSalaryFrom,
      salaryTo, setSalaryTo,
      salaryCurrency, setSalaryCurrency,
      responsibilities, setResponsibilities,
      expectations, setExpectations,
      niceToHave, setNiceToHave,
      benefits, setBenefits,
      validationErrors
    },
    handleFormSubmit
  }
}

export default usePositionFormResource