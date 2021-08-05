import Header from '../../components/Header';
import ResumeSVG from './cv.svg'

import './LandingPageHome.scss';

const LandingPageHome = () => {
  return (
    <div className='d-flex flex-column'>
      <section className='landing-page w-100 d-flex flex-column flex-lg-row align-items-center justify-content-center flex-grow-1'>
        <div className='col-lg-6 d-flex flex-column p-5 p-lg-0'>
          <Header headingLevel='h1'
            text='Managing job applications has become much easier.'
            className='display-4 text-light font-weight-bold'
          />
          <span className='text-light mt-4 h5'>
            HR-Dashboard is an company app where you can create application forms, manage job positions and applications.
          </span>
          <div className='d-flex justify-content-start mt-4'>
            <button className='btn btn-outline-primary px-4 py-2'>
              Log in
            </button>
            <button className='btn btn-primary px-4 py-2 ml-3'>
              Get started
            </button>
          </div>
        </div>
        <img src={ResumeSVG} alt='managing resumes' className='pt-lg-0 pt-5 col-lg-3 w-50' />
      </section>
      <section className='vh-100' style={{ background: '#18143b' }}>

      </section>
    </div>
  )
}

export default LandingPageHome
