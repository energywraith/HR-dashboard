import './Nav.scss'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='dashboard-nav'>
      <ul className='nav-links'>
        <li className='nav-link-container'>
          <NavLink exact to='/dashboard' className='nav-link'>
            Home
          </NavLink>
        </li>
        <li className='nav-link-container'>
          <NavLink exact to='/dashboard/company-details' className='nav-link'>
            Company details
          </NavLink>
        </li>
        <li className='nav-link-container'>
          <NavLink exact to='/dashboard/application-form' className='nav-link'>
            Application form
          </NavLink>
        </li>
        <li className='nav-link-container'>
          <NavLink exact to='/dashboard/positions' className='nav-link'>
            Open positions
          </NavLink>
        </li>
        <li className='nav-link-container'>
          <NavLink exact to='/dashboard/applications' className='nav-link'>
            Received applications
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav