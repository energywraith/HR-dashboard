import Link from './Link'

const Nav = ({ links }) => {
  return (
    <nav>
      <ul className='nav-links'>
        {links.map((link, index) =>
          <Link key={index} exact={true} to={link.to} name={link.name} />
        )}
      </ul>
    </nav>
  )
}

export default Nav