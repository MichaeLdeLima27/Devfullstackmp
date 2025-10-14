import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './pages/home/Navbar.jsx';
import Home from './pages/home/homescreen/index.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
    </Router>
  );
}

export default App;
