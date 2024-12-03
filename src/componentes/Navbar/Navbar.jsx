/* src/componentes/Navbar/Navbar.jsx */
/* Autor: Alessio Renan Aguirre Pimentel también conocido como Elazar Pimentel */

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <ul className={styles.navbarList}>
      <li><Link to="/">Inicio</Link></li>
      <li><Link to="/entidades">Entidades</Link></li>
      <li><Link to="/personas">Personas</Link></li>
      <li><Link to="/vehiculos">Vehículos</Link></li>
      <li><Link to="/reportes">Reportes</Link></li>
      <li><Link to="/configuracion">Configuración</Link></li>
    </ul>
  </nav>
);

export default Navbar;
