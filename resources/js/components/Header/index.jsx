import { Link } from 'react-router-dom'
import './Header.scss'

const Header = ({ companyName }) => {
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
    <header className='dashboard-header'>
      <Link to='/dashboard'>
        HR-dashboard
      </Link>
      <span>
        {companyName}
      </span>
      <a href='' onClick={handleLogout}>
        Logout
      </a>
    </header>
  )
}

export default Header