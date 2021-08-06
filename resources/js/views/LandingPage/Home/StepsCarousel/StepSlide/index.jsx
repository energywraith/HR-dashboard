const StepSlide = ({ header, description, image }) => {
  return (
    <div className='d-flex flex-column bg-white p-5 rounded border border-dark h-100'>
      <span className='h5 font-weight-bold'> {header} </span>
      <span> {description} </span>
      <img src={image} className='pt-3 flex-grow-1' alt={description} />
    </div>
  )
}

export default StepSlide