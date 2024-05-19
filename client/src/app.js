import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home.js';
import Forum from './pages/forum.js';

function App() {
  const [content, setContent] = useState('Home');

  const renderContent = () => {
    switch(content) {
      case 'Hiking':
        return <h1>Hiking Content</h1>;
      case 'Skiing':
        return <h1>Skiing Content</h1>;
      case 'Climbing':
        return <h1>Climbing Content</h1>;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Header setContent={setContent} />
      <main>{renderContent()}</main>
      <Footer />
    </div>
  );
}

export default App;


