import { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import './LandingPage.scss'
import BrandImage from './images/brand-image.svg'

const LandingPage = (props) => {
  const [user, setUser] = useState(null)
  const [navScrolled, setNavScrolled] = useState(null)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isPageScrolled = currPos.y < 0
      setNavScrolled(isPageScrolled)
    },
    [navScrolled]
  )

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
      <div className={`w-100 d-flex justify-content-center ${navScrolled && 'scrolled'}`}>
        <nav className='w-75 align-self-center navbar navbar-expand-lg navbar-dark'>
          <NavLink to='/' className='brand navbar-brand d-flex align-items-center'>
            <img src={BrandImage} alt='HR-Dashboard logo' />
            <span> HR-Dashboard </span>
          </NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <li className='nav-item'>
                <NavLink className='nav-link' exact to='/' activeClassName="active"> Home </NavLink>
              </li>
              {!user
                ? <>
                    <li className='nav-item ml-lg-3'>
                      <NavLink className='nav-link' exact to='/register' activeClassName="active"> Register </NavLink>
                    </li>
                    <li className='nav-item ml-lg-3'>
                      <NavLink className='nav-link' exact to='/login' activeClassName="active"> Login </NavLink>
                    </li>
                  </>
                : <li className='nav-item ml-lg-3'>
                    <a className='nav-link' href='/dashboard'> Go to dashboard </a>
                  </li>
              }
            </ul>
          </div>
        </nav>
      </div>

      <main className='d-flex flex-grow-1'>
        {props.children}
      </main>
    </div>
  )
}

export default LandingPage