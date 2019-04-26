import React from 'react';
import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js';

import Facebook from './components/Facebook';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
    <Navbar/>
     <Facebook />
     
    </div>
  );
}

export default App;
