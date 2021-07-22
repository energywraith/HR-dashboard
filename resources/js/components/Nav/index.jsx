import './Nav.scss'
import axios from 'axios';

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
    <nav>
      <button>
        Home
      </button>
      <button>
        Manage applications
      </button>
      <button>
        Change company details
      </button>
      <button className='logout' onClick={event => handleLogout(event)}>
        Logout
      </button>
    </nav>
  )
}

export default Nav