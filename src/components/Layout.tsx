import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';
Outlet;

export const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="min-h-[610px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
