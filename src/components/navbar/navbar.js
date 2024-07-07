import React from 'react'
import { NavLink } from 'react-router-dom'
import "./navbar.css"

function Navbar() {
    const NavLinkStyle={
        textDecoration: 'none',
    }
    const listStyle={
        margin: 10,
    }
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item" style={listStyle}>
        {/* <a className="nav-NavLink active" href="#">
          Home
        </a> */}
        <NavLink to={"/"} style={NavLinkStyle}>
        Home
        </NavLink>
      </li>
      <li className="nav-item" style={listStyle}>
        {/* <a className="nav-NavLink" href="#">
          About
        </a> */}
        <NavLink to={"/about"} style={NavLinkStyle}>
        About
        </NavLink>
      </li>
      <li className="nav-item" style={listStyle}>
        {/* <a className="nav-NavLink" href="#">
          Settings
        </a> */}
        <NavLink to={"/settings"} style={NavLinkStyle}>Settings</NavLink>
      </li>
      <li className="nav-item" style={listStyle}>
        {/* <a className="nav-NavLink" href="#">
          Contact
        </a> */}
          <NavLink to={"/contact"} style={NavLinkStyle} >Contact</NavLink>
      </li>
      
    </ul>
  </div>
</nav>

  )
}

export default Navbar
