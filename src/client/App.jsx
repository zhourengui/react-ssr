import React from "react"
import { Routes } from "./router/index"
import { BrowserRouter as Router, Link } from "react-router-dom"
const App = () => {
  return (
    <div>
      <Router basename="/">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {Routes()}
      </Router>
    </div>
  )
}

export default App
