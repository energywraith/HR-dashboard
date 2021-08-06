const Details = ({ application, positions }) => {
  const position = positions.filter(position =>
    parseInt(position.id) === parseInt(application.position_id)
  )[0]

  return (
    <ul className='pt-3'>
      <li>
        <span className='text-muted'> Position: </span>
        {position ? position.name : 'Does not exist anymore'}
      </li>
      <li> <span className='text-muted'> Email: </span> {application.email} </li>
      <li> <span className='text-muted'> Number: </span> {application.number} </li>
    </ul>
  )
}

export default Details