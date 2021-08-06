import { NavLink } from 'react-router-dom'

const Link = ({ exact = false, to, name }) => {
  return (
    <li className='nav-link-container'>
      <NavLink exact={exact} to={to} className='nav-link' activeClassName='active'>
        {name}
      </NavLink>
    </li>
  )
}

export default Link