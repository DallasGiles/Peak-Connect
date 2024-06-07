import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home';
import Forum from './pages/forum';
import Login from './components/login';
import Register from './components/register';
import Hiking from './pages/Hiking';
import Skiing from './pages/Skiing';
import Climbing from './pages/Climbing';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const location = useLocation();
  const showHeader = location.pathname !== '/login' && location.pathname !== '/register';
  const showFooter = location.pathname !== '/login' && location.pathname !== '/register';

  return (
    <>
      {showHeader && <Header onLogout={handleLogout} />}
      <main>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/hiking" element={<Hiking />} />
          <Route path="/skiing" element={<Skiing />} />
          <Route path="/climbing" element={<Climbing />} />
          <Route path="*" element={<h1>Page not found</h1>} /> {/* Fallback for undefined routes */}
        </Routes>
      </main>
      {showFooter && <Footer />}
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}






