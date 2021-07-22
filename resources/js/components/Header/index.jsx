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
      <button>
        Logout
      </button>
    </div>
  )
}

export default Header