import { useState } from "react"
import FormInputGroup from "../FormInputGroup"
import FormSelectGroup from "../FormSelectGroup"

const AddFieldForm = ({ company, fields, setFields, closeForm }) => {
  const [type, setType] = useState('text')
  const [label, setLabel] = useState('')

  const addFieldHandle = (event) => {
    event.preventDefault()

    if (label.length > 0) {
      const newField = {
        id: fields.length > 0 ? fields[fields.length - 1].id + 1 : 1,
        text: label,
        type,
        removable: true
      }

      setFields([ ...fields, newField ])
      setLabel('')
      closeForm()
    }
  }

  return (
    <form className='mt-3 p-3 border rounded bg-white d-flex flex-column' onSubmit={addFieldHandle}>
      <FormInputGroup
        stateValue={label}
        setStateValue={setLabel}
        label='Field label'
        placeholder='When can you start?'
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