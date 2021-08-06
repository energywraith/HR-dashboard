import { useEffect, useState } from "react"
import axios from 'axios'
import FormInputGroup from "../../../components/FormInputGroup"

const CompanyDetails = ({ company, setCompany }) => {
  const [companyName, setCompanyName] = useState('')
  const [description, setDescription] = useState('')

  // Everytime company gets updated set inputs to proper value
  useEffect(() => {
    if(company) {
      company.company_details.description && setDescription(company.company_details.description)
      company.name && setCompanyName(company.name)
    }
  }, [company])

  const handleSubmit = async (event) => {
    event.preventDefault()

    const response = await axios.post('/api/change_company_details', {
      id: company.id,
      name: companyName,
      company_details: { ...company.company_details, description: description }
    })

    setCompany(response.data)
  }

  return (
    <section className='p-4'>
      <form className='pt-2' onSubmit={handleSubmit}>
        <FormInputGroup
          stateValue={companyName}
          setStateValue={setCompanyName}
          label='Company Name'
          note='This name will be seen by applicants.'
        />

        <FormInputGroup
          stateValue={description}
          setStateValue={setDescription}
          label='Description'
          note='Encourage your future employees to apply with description.'
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  )
}

export default CompanyDetails