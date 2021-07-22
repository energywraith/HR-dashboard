import './Nav.scss'
import axios from 'axios';
import { NavLink } from 'react-router-dom'

const Nav = () => {
  const handleLogout = async (event) => {
    event.preventDefault;
    try {
      await axios.post('/logout')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <nav className='dashboard-nav'>
      <ul>
        <li>
          <NavLink exact to='/dashboard'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/dashboard/applications'>
            Manage applications
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/dashboard/company'>
            Change company details
          </NavLink>
        </li>
        <li className='logout' onClick={event => handleLogout(event)}>
          <NavLink exact to='/'>
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav