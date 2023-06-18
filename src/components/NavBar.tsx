import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export const NavBar = () => {
  const styleActive = {
    color: '#161616',
    textDecoration: 'underline',
  };
  return (
    <header>
      <NavLink
        className="site-logo"
        to="/"
        style={({ isActive }) => (isActive ? styleActive : {})}>
        #VanLife
      </NavLink>

      <nav>
        <NavLink
          to="/host"
          style={({ isActive }) => (isActive ? styleActive : {})}>
          Host
        </NavLink>
        <NavLink
          to="/Vans"
          style={({ isActive }) => (isActive ? styleActive : {})}>
          Vans
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? styleActive : {})}>
          About
        </NavLink>
      </nav>
    </header>
  );
};
