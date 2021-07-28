import Link from './Link'

const Nav = ({ links }) => {
  return (
    <nav>
      <ul className='nav-links'>
        {links.map((link, index) =>
          <Link key={index} exact={true} to={link.to} name={link.name} />
        )}
        {/* <Link exact={true} to='/dashboard' name='Home' />
        <Link exact={true} to='/dashboard/company-details' name='Company details' />
        <Link exact={true} to='/dashboard/application-form' name='Application form' />
        <Link exact={true} to='/dashboard/positions' name='Open positions' />
        <Link exact={true} to='/dashboard/applications' name='Received applications' /> */}
      </ul>
    </nav>
  )
}

export default Nav