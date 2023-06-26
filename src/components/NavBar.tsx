import { NavLink } from 'react-router-dom';

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
        <NavLink
          to="/login"
          style={({ isActive }) => (isActive ? styleActive : {})}>
          Login
        </NavLink>
        <button
          onClick={() => localStorage.removeItem('user')}
          className="px-4">
          X
        </button>
      </nav>
    </header>
  );
};
