/* src/App.jsx */
/* Autor: Alessio Renan Aguirre Pimentel también conocido como Elazar Pimentel */

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Navbar from './componentes/Navbar/Navbar';
import AppRouter from './router/appRouter.jsx'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <main className="container">
          <AppRouter />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
