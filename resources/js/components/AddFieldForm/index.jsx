import { useState } from "react"
import FormInputGroup from "../FormInputGroup"
import FormSelectGroup from "../FormSelectGroup"

const AddFieldForm = ({ company, fields, setFields, closeForm }) => {
  const [type, setType] = useState('text')
  const [label, setLabel] = useState('')
  const [validationErrors, setValidationErrors] = useState({})

  const addFieldHandle = (event) => {
    event.preventDefault()

    if (label.length === 0) {
      setValidationErrors({ label: ['This field cannot be empty']})
      return
    }

    const newField = {
      id: fields.length > 0 ? fields[fields.length - 1].id + 1 : 1,
      key: label.split(' ').join('_').replace(/[^\w\s]/gi, '').toLowerCase(),
      label,
      type,
      removable: true
    }

    // When there is already element with the same name
    if (fields.filter(field => field.key === newField.key).length > 0) {
      setValidationErrors({ label: ['This field already exists.'] })
      return
    }

    // Success
    setFields([ ...fields, newField ])
    setLabel('')
    closeForm()
    setValidationErrors({})
  }

  return (
    <form className='mt-3 p-3 border rounded bg-white d-flex flex-column' onSubmit={addFieldHandle}>
      <FormInputGroup
        stateValue={label}
        setStateValue={setLabel}
        label='Field label'
        placeholder='When can you start?'
        failedValidation={validationErrors.label}
      />

      <FormSelectGroup
        setStateValue={setType}
        label='Field type'
        options={[
          'Text',
          'Email',
          'Number',
          'File'
        ]}
      />

      <button type='submit' className='btn btn-primary mt-5 px-4 align-self-end'> Add </button>
    </form>
  )
}

export default AddFieldForm