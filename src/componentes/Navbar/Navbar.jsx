/* src/componentes/Navbar/Navbar.jsx */
/* Autor: Alessio Renan Aguirre Pimentel también conocido como Elazar Pimentel */

import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <ul className={styles.navbarList}>
      <li><NavLink to="/" activeClassName={styles.active}>Inicio</NavLink></li>
      <li><NavLink to="/entidades" activeClassName={styles.active}>Entidades</NavLink></li>
      <li><NavLink to="/personas" activeClassName={styles.active}>Personas</NavLink></li>
      <li><NavLink to="/vehiculos" activeClassName={styles.active}>Vehículos</NavLink></li>
      <li><NavLink to="/reportes" activeClassName={styles.active}>Reportes</NavLink></li>
      <li><NavLink to="/configuracion" activeClassName={styles.active}>Configuración</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
