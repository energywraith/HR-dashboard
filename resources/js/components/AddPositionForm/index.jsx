import { useState } from "react"
import axios from "axios"
import FormInputGroup from "../FormInputGroup"
import FormSelectGroup from "../FormSelectGroup"

const AddPositionForm = ({ company, positions, setPositions }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [seniority, setSeniority] = useState('')
  const [ validationErrors, setValidationErrors ] = useState({})

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    const newPosition = {
      name,
      description,
      seniority,
      company_id: company.id
    }

    try {
      const response = await axios.post('/api/position', { ...newPosition })
      setValidationErrors({})
      setPositions([ ...positions, response.data ])
    } catch (error) {
      let errors = error.response.data.errors
      setValidationErrors(errors)
    }
  }

  return (
    <form className='mt-3 p-3 border rounded bg-white d-flex flex-column' onSubmit={handleFormSubmit}>
      <FormInputGroup
        inputValue={name}
        setInputValue={setName}
        label='Job name'
        placeholder='ex. Google software engineer'
        note='Let the interested one know he is in the right place'
        failedValidation={validationErrors.name}
      />
      <FormInputGroup
        inputValue={description}
        setInputValue={setDescription}
        label='Job description'
        placeholder='ex. Google is a...'
        note='Give your employee a brief description of your company or the position'
        failedValidation={validationErrors.description}
      />
      <FormSelectGroup
        setValue={setSeniority}
        label='Seniority'
        options={[
          'All',
          'Junior',
          'Regular',
          'Senior'
        ]}
      />

      <button type='submit' className='btn btn-primary mt-5 px-4 align-self-end'> Add </button>
    </form>
  )
}

export default AddPositionForm