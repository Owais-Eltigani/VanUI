import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Vans } from './Pages/Vans';
import { Van as VanDetails } from './Pages/VanDetails';
import './server';
import { Layout } from './components/Layout';
import { Host } from './components/Host';
import { Income } from './components/Income';
import { Review } from './components/Review';
import { DashBoard } from './components/DashBoard';
import { VansList } from './components/VansList';
import { VanByID } from './components/VanByID';
import { Pricing } from './components/Pricing';
import { Photos } from './components/Photos';
import { HostVanDetailsLayout as VanLayout } from './components/HostVanDetailsLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="About" element={<About />} />

          <Route path="vans" element={<Vans />} />

          <Route path="host" element={<Host />}>
            <Route index element={<DashBoard />} />

            <Route path="income" element={<Income />} />

            <Route path="Reviews" element={<Review />} />

            <Route path="VansList" element={<VansList />} />

            <Route path="vansList/:id" element={<VanLayout />}>
              <Route index element={<VanByID />} />

              <Route path="pricing" element={<Pricing />} />

              <Route path="photos" element={<Photos />} />
            </Route>
          </Route>

          <Route path="/vans/:id" element={<VanDetails />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
