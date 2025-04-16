// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import AppRoutes from './routes/routes';
import Dashboard from './Page/Dashboard/Dashboard';

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
