import Header from '../../components/Header';

const LandingPageHome = () => {
  return (
    <section className='d-flex flex-column w-100'>
      <Header headingLevel='h1'
        text='Managing job applications has become much easier.'
        className='p-5 display-4 text-light text-center align-self-center'
      />
      <div className='main-buttons d-flex align-self-center mt-1'>
        <button className='btn btn-lg get-started'> Get started </button>
        <button className='btn btn-lg user'> Im user </button>
      </div>
    </section>
  )
}

export default LandingPageHome
