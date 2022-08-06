import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Contato</NavLink>
        <NavLink to="/contact">Sobre</NavLink>
    </nav>
  )
}

export default Navbar