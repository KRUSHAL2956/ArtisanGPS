import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from '../layout/AppLayout';
import Landing from '../pages/Landing';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Landing />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
