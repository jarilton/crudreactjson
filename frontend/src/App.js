import React from 'react';
import { Route, Routes } from 'react-router';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Crud from './crud/index';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Routes>
        <Route exact path="/" element={<Crud />}/>
      </Routes>
    </div>
  );
}

export default App;
