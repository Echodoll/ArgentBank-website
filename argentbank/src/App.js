import './designs/css/main.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Homepage';
import Login from './pages/Login';
import UserAccount from './pages/Account';
import Error404 from './pages/Error404';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/user-account' element={<UserAccount />} />
        <Route path='*' element={<Error404 />} />

      </Routes>

    </Router>
  );
}

export default App;
