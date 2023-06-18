import React from 'react';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';
Outlet;

export const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};
