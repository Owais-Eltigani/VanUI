import { Outlet, NavLink } from 'react-router-dom';

export const Host = () => {
  const styleActive = {
    fontWeight: 'bold',
    color: '#161616',
    textDecoration: 'underline',
  };

  return (
    <>
      <nav className="host-nav">
        <NavLink
          style={({ isActive }) => (isActive ? styleActive : {})}
          end
          to="/host">
          Dashboard
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? styleActive : {})}
          to="income">
          Income
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? styleActive : {})}
          to="vansList">
          Vans
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? styleActive : {})}
          to="reviews">
          Reviews
        </NavLink>
      </nav>{' '}
      <Outlet />
    </>
  );
};
