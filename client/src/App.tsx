import React from 'react';
import logo from './logo.svg';
import './App.css';
import Teams from './components/teams';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
      <Routes>
        <Route path='/' element={< Teams />} />
      </Routes>
  );
}

export default App;
