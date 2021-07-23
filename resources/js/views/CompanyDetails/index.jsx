import { useEffect, useState } from "react"
import axios from 'axios'
import FormGroup from "../../components/FormGroup"

const CompanyDetails = ({ company, setCompany }) => {
  const [companyName, setCompanyName] = useState('')
  const [description, setDescription] = useState('')

  // Everytime company gets updated set inputs to proper value
  useEffect(() => {
    if(company) {
      setDescription(company.company_details.description)
      setCompanyName(company.name)
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
      <h1> Company details </h1>
      <form className='pt-2' onSubmit={handleSubmit}>
        <FormGroup
          inputValue={companyName}
          setInputValue={setCompanyName}
          label='Company Name'
          placeholder='Facebook, google...'
          note='This name will be seen by applicants.'
        />

        <FormGroup
          inputValue={description}
          setInputValue={setDescription}
          label='Description'
          placeholder='Tell us a bit about your company..'
          note='Encourage your future employees to apply with description.'
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        {/* <div class="form-row">
          <div class="form-group col-md-2">
            <label for="seniority">Seniority</label>
            <select id="seniority" class="form-control" aria-describedby="seniorityNote">
              <option selected>All</option>
              <option>Junior</option>
              <option>Regular</option>
              <option>Senior</option>
            </select>
            <small id="seniorityNote" className="form-text text-muted">
              How experienced should the employee be?
            </small>
          </div>
          <div class="form-group col-md-2 gap-3">
            <label for="salaryRange">Salary range</label>
            <div class="form-row" id='salaryRange'>
                <input type="text" class="form-control col-5 mx-1" id="minSalary" aria-describedby="salaryNote" />
                <input type="text" class="form-control col-5 mx-1" id="maxSalary" aria-describedby="salaryNote" />
            </div>
            <small id="salaryNote" className="form-text text-muted">
              Leave empty if you dont want to specify salary.
            </small>
          </div>
        </div> */}
      </form>
    </section>
  )
}

export default CompanyDetails