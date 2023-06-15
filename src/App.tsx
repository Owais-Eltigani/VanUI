import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './Pages/Home';
import { About } from './Pages/About';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">
          #VanLife
        </Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/About/" element={<About />} />

        <Route
          path="/"
          element={<div className="bg-black text-white h-screen">Main </div>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
