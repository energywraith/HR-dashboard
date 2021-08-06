import { useState, useEffect } from 'react'
import { useScrollPosition } from '../../../hooks/useScrollPosition'
import { NavLink } from 'react-router-dom'
import AuthLinks from './AuthLinks'
import BrandImage from '../images/brand-image.svg'

const Nav = () => {
  const [user, setUser] = useState(null)
  const [navScrolled, setNavScrolled] = useState(null)

  useEffect(() => {
    const checkIfUserIsLoggedIn = async () => {
      const response = await axios.get('/api/user')
      if (response.data) {
        setUser(response.data)
      }
    }

    checkIfUserIsLoggedIn()
  }, [])

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isPageScrolled = currPos.y < 0
      setNavScrolled(isPageScrolled)
    },
    [navScrolled]
  )

  return (
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
            <AuthLinks user={user} />
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav