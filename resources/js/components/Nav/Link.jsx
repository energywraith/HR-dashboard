import { NavLink } from 'react-router-dom'
import './Nav.scss'

const Link = ({ exact = false, to, name }) => {
  return (
    <li className='nav-link-container'>
      <NavLink exact={exact} to={to} className='nav-link'>
        {name}
      </NavLink>
    </li>
  )
}

export default Link