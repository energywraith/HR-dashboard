const Position = ({ position, deletePosition }) => {
  return (
    <ul key={position.id} className='mt-2 p-4 bg-white border rounded'>
      <li className='h3'>{position.name}</li>
      <li>{position.description}</li>
      <li>
        <a href={`${window.location.origin}/${position.hash_url}`}> Link </a>
      </li>
      <button className='mt-3 btn btn-primary'> Edit </button>
      <button className='mt-3 btn btn-outline-danger ml-2' onClick={() => deletePosition(position.id)}> Delete </button>
    </ul>
  )
}

export default Position