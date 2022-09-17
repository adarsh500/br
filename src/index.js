import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import Employee from './components/EmpoyeeDetail/';
import { EmployeeProvider } from './contexts/EmployeeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <EmployeeProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path=":id" element={<Employee />} />
        </Routes>
      </EmployeeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
