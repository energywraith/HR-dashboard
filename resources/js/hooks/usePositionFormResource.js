import { useState } from 'react'
import axios from "axios"

const usePositionFormResource = (company, positions, setPositions) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [seniority, setSeniority] = useState('')
  const [salaryFrom, setSalaryFrom] = useState('')
  const [salaryTo, setSalaryTo] = useState('')
  const [salaryCurrency, setSalaryCurrency] = useState('')
  const [responsibilities, setResponsibilities] = useState([])
  const [expectations, setExpectations] = useState([])
  const [niceToHave, setNiceToHave] = useState([])
  const [benefits, setBenefits] = useState([])
  const [validationErrors, setValidationErrors] = useState({})

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

    console.log(newPosition)

    try {
      const response = await axios.post('/api/position', { ...newPosition })
      setValidationErrors({})
      setPositions([ ...positions, response.data ])
    } catch (error) {
      let errors = error.response.data.errors
      setValidationErrors(errors)
    }
  }

  return {
    formStates: {
      name,
      setName,
      setDescription,
      setLocation,
      setSeniority,
      setSalaryFrom,
      setSalaryTo,
      setSalaryCurrency,
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