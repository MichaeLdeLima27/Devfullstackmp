import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from "./pages/Home/Navbar"
import Home from "./pages/Home/Homescreen"

function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Navbar />
      <Home />
    </Router>
  )
}

export default App

