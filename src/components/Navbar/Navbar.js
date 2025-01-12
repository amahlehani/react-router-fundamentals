import React from 'react';
import "./Navbar.css";
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav>
        <NavLink to="/home" activeClassName="active">Home</NavLink>
        <NavLink to="/profile" activeClassName="active">Profile</NavLink>
        <NavLink to="/settings" activeClassName="active">Settings</NavLink>
    </nav>
  )
}

export default Navbar