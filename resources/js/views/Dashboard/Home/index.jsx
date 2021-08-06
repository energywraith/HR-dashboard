const Home = ({ company, applications }) => {
  return company
  ? (
      <section className='p-2'>
        <p className='h4'>
          Welcome {company && company.name} in your HR-Dashboard.
        </p>
        <span className='text-primary'>
          You have {applications.length} applications
          that needs to be proccessed.
        </span>
      </section>
    )
  : <span> Loading... </span>
}

export default Home