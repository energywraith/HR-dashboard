const AdditionalQuestions = ({ application }) => {
  return (
    <ul>
      {Object.keys(application.additional_questions).map((keyName, i) => (
        application.additional_questions[keyName] &&
        <li key={i}>
          <span className='text-muted'> {keyName}: </span>
          {application.additional_questions[keyName]}
        </li>
      ))}
    </ul>
  )
}

export default AdditionalQuestions