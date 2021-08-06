import FormSelectGroup from "../../../components/FormSelectGroup"
import { useEffect, useState } from "react"
import Application from "./Application"
import axios from "axios"

const Applications = ({ applications, setApplications, positions }) => {
  const [type, setType] = useState('All')
  const [typeId, setTypeId] = useState('')

  useEffect(() => {
    (type === 'All')
      ? setTypeId('')
      : setTypeId(positions.filter(position => position.name === type)[0].id)
  }, [type])

  const deleteApplication = async (id) => {
    const response = await axios.post(`/api/application/delete/${id}`)
    setApplications(applications.filter(application => application.id !== response.data.id))
  }

  const filteredApplications = (
    type === 'All'
      ? applications
      : applications.filter(application => parseInt(application.position_id) === parseInt(typeId))
    ).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))

  return (
    <section className='p-3'>
      <FormSelectGroup label='Job'
        options={['All', ...positions.map(position => position.name)]}
        setStateValue={setType}
      />
      <ul>
        {applications && filteredApplications.map(application =>
          <Application key={application.id} application={application} positions={positions} handleDeleteApplication={deleteApplication} />
        )}
      </ul>
    </section>
  )
}

export default Applications