import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import Employee from './components/EmpoyeeDetail/';
import Heirarchy from './components/Hierarchy';
import { EmployeeProvider } from './contexts/EmployeeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <EmployeeProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path=":id" element={<Employee />} />
          <Route path="/hierarchy" element={<Heirarchy />} />
        </Routes>
      </EmployeeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
