import React from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import Auth from './pages/Auth';
import Registration from './pages/Registration';
import Home from './pages/Home';
import Admin from './pages/Admin';

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />}></Route>
      <Route path="/" element={<Registration />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
    </Routes>
  );
}

export default App;
