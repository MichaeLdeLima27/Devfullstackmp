import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./Pages/Home/Navbar.jsx";
import Home from './pages/Home/homescreen/index.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
    </Router>
  );
}

export default App;
