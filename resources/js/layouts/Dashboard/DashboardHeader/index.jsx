import './Header.scss'

const Header = () => {
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
      <a href='/'>
        HR-dashboard
      </a>
      <a href='' onClick={handleLogout}>
        Logout
      </a>
    </header>
  )
}

export default Header