import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { LoginProvider } from './context/LoginContext';
function App() {

  return (
    
   <LoginProvider>
    <div className="App">
      <Navbar/>
      <Outlet />
     </div>
   </LoginProvider>
  );
}


export default App;
