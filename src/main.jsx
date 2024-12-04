/* src/main.jsx */
/* Autor: Alessio Renan Aguirre Pimentel también conocido como Elazar Pimentel */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './estilos/styles.css';
import { ThemeProvider } from './context/ThemeContext';
import { initDatabase } from './database';

// Initialize the database before rendering
initDatabase().then(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
}).catch(error => {
  console.error('Failed to initialize database:', error);
  // You might want to show an error message to the user here
});
