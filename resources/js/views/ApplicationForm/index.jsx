import { useEffect, useRef } from 'react';
import axios from 'axios';
import ToggleComponent from '../../components/ToggleComponent';
import AddFieldForm from '../../components/AddFieldForm';
import SortableList from '../../components/SortableList';

const ApplicationForm = ({ company, fields, setFields }) => {
  const toggleComponentRef = useRef(null)

  useEffect(() => {
    const updateDatabase = async () => {
      await axios.post('/api/change_company_details', {
        id: company.id,
        application_form: fields
      })
    }

    if (company) {
      updateDatabase()
    }
  }, [fields])

  const deleteFieldHandle = (id) => {
    setFields(fields.filter(field => field.id !== id))
  }

  return (
    <section className='p-3 mx-3 d-flex flex-column'>
      <p className='h5 mb-4 text-center'> In this section, you can move items to change their order, and add or remove items. </p>

      <ToggleComponent
        buttonLabel='Add field'
        buttonHideLabel='Hide form'
        buttonClassName='btn btn-primary border align-self-end mb-3'
        ref={toggleComponentRef}
      >
        <AddFieldForm
          company={company}
          fields={fields}
          setFields={setFields}
          closeForm={() => {toggleComponentRef.current.click()}}
        />
      </ToggleComponent>

      <SortableList cards={fields} setCards={setFields}
        cardClassName='p-3 my-1 border bg-white rounded'
        deleteElementFunction={deleteFieldHandle}
      />
    </section>
  )
}

export default ApplicationForm