import Header from "../../../../components/Header"
import Details from "./Details"
import AdditionalQuestions from "./AdditionalQuestions"

const Application = ({ application, positions, handleDeleteApplication }) => {
  return (
    <li key={application.id} className='d-flex flex-column mt-2 p-4 bg-white border rounded'>
      <a href={`/api/resume/${application.id}`} className='align-self-start'>
        <Header headingLevel='h5' text={application.name} />
      </a>
      
      <small className='text-muted'>
        {new Date(application.created_at).toLocaleString()}
      </small>

      <Details application={application} positions={positions} />
      <AdditionalQuestions application={application} />

      <button className='btn btn-danger align-self-start mt-3'
        onClick={() => handleDeleteApplication(application.id)}
      >
        Delete
      </button>
    </li>
  )
}

export default Application