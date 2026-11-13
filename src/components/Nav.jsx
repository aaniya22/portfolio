import { NavLink } from 'react-router-dom'
import './Nav.css'

function Nav() {
  return (
    <header className="nav">
      <NavLink to="/" className="brand">Aaniya</NavLink>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <a className="right" href="mailto:aaniyaatomar@gmail.com">Say hello ↗</a>
    </header>
  )
}

export default Nav