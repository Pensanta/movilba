/* src/componentes/Navbar/Navbar.jsx */
/* Autor: Alessio Renan Aguirre Pimentel también conocido como Elazar Pimentel */

import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <ul className={styles.navbarList}>
      <li>
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? styles.active : undefined}
        >
          Inicio
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/entidades" 
          className={({ isActive }) => isActive ? styles.active : undefined}
        >
          Entidades
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/personas" 
          className={({ isActive }) => isActive ? styles.active : undefined}
        >
          Personas
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/vehiculos" 
          className={({ isActive }) => isActive ? styles.active : undefined}
        >
          Vehículos
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/reportes" 
          className={({ isActive }) => isActive ? styles.active : undefined}
        >
          Reportes
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/configuracion" 
          className={({ isActive }) => isActive ? styles.active : undefined}
        >
          Configuración
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
