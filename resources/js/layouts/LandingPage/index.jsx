import './LandingPage.scss'
import { Link } from 'react-router-dom'

const LandingPage = (props) => {
  return (
    <div className='landing-page-container d-flex flex-column'>
      <nav>
        <span className='brand'>
          HR-DASHBOARD
        </span>
        <ul className='nav-links'>
          <li className='nav-link'>
            <Link to='/'> Home </Link>
          </li>
          <li className='nav-link'>
            <Link to='/register'> Register </Link>
          </li>
          <li className='nav-link'>
            <Link to='/login'> Login </Link>
          </li>
        </ul>
      </nav>

      <main className='d-flex flex-grow-1'>
        {props.children}
      </main>
    </div>
  )
}

export default LandingPage