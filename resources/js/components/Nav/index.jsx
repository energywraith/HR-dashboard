import './Nav.scss'
import axios from 'axios';
import { NavLink, Redirect } from 'react-router-dom'

const Nav = () => {
  const handleLogout = async (event) => {
    event.preventDefault;
    try {
      await axios.post('/logout')
      window.location.href = '/'
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <nav className='dashboard-nav'>
      <ul className='nav-links'>
        <li className='nav-link-container'>
          <NavLink exact to='/dashboard' className='nav-link'>
            Home
          </NavLink>
        </li>
        <li className='nav-link-container'>
          <NavLink exact to='/dashboard/company' className='nav-link'>
            Company details
          </NavLink>
        </li>
        <li className='nav-link-container'>
          <NavLink exact to='/dashboard/application-form' className='nav-link'>
            Application form
          </NavLink>
        </li>
        <li className='nav-link-container'>
          <NavLink exact to='/dashboard/applications' className='nav-link'>
            Received applications
          </NavLink>
        </li>
        <li className='nav-link-container logout'>
          {/* <NavLink exact to='/' className='nav-link'> */}
          <button onClick={handleLogout}>
            Logout
          </button>
          {/* </NavLink> */}
        </li>
      </ul>
    </nav>
  )
}

export default Nav