import { NavLink } from 'react-router-dom'

const AuthLinks = ({ user }) => {
  return !user
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

export default AuthLinks