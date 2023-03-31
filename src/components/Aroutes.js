import React from 'react';
import {Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./home";
import About from "./about";
import Resources from "./resources.js";
import NoPage from "./nopage";
import Prescribing from "./prescribing";
import Medications from './medications';
import COVID from './COVID';
import Adaptation from './adaptation';

export default function Router() {
  return (
      <Routes >
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="resources" element={<Resources/>}> 
          <Route path="prescribing" element={<Prescribing />} />
          <Route path="medications" element={<Medications />} />
          <Route path="COVID" element={<COVID />} />
          <Route path="adaptation" element={<Adaptation />} />

          </Route>
          
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    
  );
}
