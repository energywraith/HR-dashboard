import './Nav.scss'
import Link from './Link'

const Nav = () => {
  return (
    <nav className='dashboard-nav'>
      <ul className='nav-links'>
        <Link exact={true} to='/dashboard' name='Home' />
        <Link exact={true} to='/dashboard/company-details' name='Company details' />
        <Link exact={true} to='/dashboard/application-form' name='Application form' />
        <Link exact={true} to='/dashboard/positions' name='Open positions' />
        <Link exact={true} to='/dashboard/applications' name='Received applications' />
      </ul>
    </nav>
  )
}

export default Nav