import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home';
import Forum from './pages/forum';
import Login from './components/login';
import Register from './components/register'; // Ensure this component exists
import Hiking from './pages/Hiking';
import Skiing from './pages/Skiing';
import Climbing from './pages/Climbing';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/hiking" element={<Hiking />} />
          <Route path="/skiing" element={<Skiing />} />
          <Route path="/climbing" element={<Climbing />} />
          <Route path="*" element={<h1>Page not found</h1>} /> {/* Fallback for undefined routes */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;






