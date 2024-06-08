import React from 'react';
import './App.css';
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import {BrowserRouter} from 'react-router-dom'
import {Routes as Switch,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;