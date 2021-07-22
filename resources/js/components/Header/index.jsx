import { Link } from 'react-router-dom'
import './Header.scss'

const Header = ({ companyName }) => {
  return (
    <div className='header'>
      <Link exact to='/dashboard'>
        HR-dashboard
      </Link>
      <span>
        {companyName}
      </span>
      <Link exact to='/'>
        Logout
      </Link>
    </div>
  )
}

export default Header