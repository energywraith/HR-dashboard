import './LandingPage.scss'
import Nav from './Nav'

const LandingPage = (props) => {
  return (
    <div className='landing-page-container d-flex flex-column'>
      <Nav />

      <main className='d-flex flex-grow-1'>
        {props.children}
      </main>
    </div>
  )
}

export default LandingPage