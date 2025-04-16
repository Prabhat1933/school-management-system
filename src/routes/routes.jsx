// src/routes/routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Page/Dashboard/Dashboard';
import About from '../Page/About/About';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
