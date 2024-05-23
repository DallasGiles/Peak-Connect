import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '/Users/dallas/personal-projects/peak-connect/client/src/app.js';
import { BrowserRouter as Router } from 'react-router-dom';
import 'styles/style.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(  
      <App />
  );



