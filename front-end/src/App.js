
import './designs/css/main.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/home'
import Signin from './pages/signIn'
import User from "./pages/user"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/user' element={<User />} />
      </Routes>

    </Router>
  );
}

export default App;
