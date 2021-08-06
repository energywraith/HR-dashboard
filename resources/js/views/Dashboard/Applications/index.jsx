import Header from "../../../components/Header"
import FormSelectGroup from "../../../components/FormSelectGroup"
import { useEffect, useState } from "react"

const Applications = ({ applications, positions }) => {
  const [type, setType] = useState('All')
  const [typeId, setTypeId] = useState('')

  useEffect(() => {
    (type === 'All')
      ? setTypeId('')
      : setTypeId(positions.filter(position => position.name === type)[0].id)
  }, [type])

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
          <li key={application.id} className='d-flex flex-column mt-2 p-4 bg-white border rounded'>
            <Header headingLevel='h5' text={application.name} />

            <a href={`/api/resume/${application.id}`} className='align-self-start'> Resume </a>

            <ul className='pt-3'>
              <li>
                <span className='text-muted'> Position: </span>
                {positions.filter(position =>
                  parseInt(position.id) === parseInt(application.position_id)
                )[0].name}
              </li>
              <li> <span className='text-muted'> Email: </span> {application.email} </li>
              <li> <span className='text-muted'> Number: </span> {application.number} </li>
            </ul>

            <ul className='pb-3'>
              {Object.keys(application.additional_questions).map((keyName, i) => (
                application.additional_questions[keyName] &&
                <li key={i}>
                  <span className='text-muted'> {keyName}: </span>
                  {application.additional_questions[keyName]}
                </li>
              ))}
            </ul>
            
            <small className='text-muted'>
              {new Date(application.created_at).toLocaleString()}
            </small>
          </li>
        )}
      </ul>
    </section>
  )
}

export default Applications