import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.scss'
import BrandImage from './images/brand-image.svg'

const LandingPage = (props) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const checkIfUserIsLoggedIn = async () => {
      const response = await axios.get('/api/user')
      if (response.data) {
        setUser(response.data)
      }
    }

    checkIfUserIsLoggedIn()
  }, [])

  return (
    <div className='landing-page-container d-flex flex-column'>
      <nav>
        <div className='brand d-flex align-items-center px-3'>
          <img src={BrandImage} alt='HR-Dashboard logo' />
          <span> HR-Dashboard </span>
        </div>
        <ul className='nav-links'>
          <li className='nav-link'>
            <Link to='/'> Home </Link>
          </li>
          {!user
            ? <>
                <li className='nav-link'>
                  <Link to='/register'> Register </Link>
                </li>
                <li className='nav-link'>
                  <Link to='/login'> Login </Link>
                </li>
              </>
            : <li className='nav-link'>
                <a href='/dashboard'> Go to dashboard </a>
              </li>
          }
        </ul>
      </nav>

      <main className='d-flex flex-grow-1'>
        {props.children}
      </main>
    </div>
  )
}

export default LandingPage