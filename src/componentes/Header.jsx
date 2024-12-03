/* src/componentes/Header.jsx */
/* Autor: Alessio Renan Aguirre Pimentel también conocido como Elazar Pimentel */

import React from 'react';
import logo from '../assets/logo_ba_amarillo_blanco.png';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logoContainer}>
      <img src={logo} alt="Logo BA" className={styles.logo} />
      <h1 className={styles.title}>MovilBA</h1>
    </div>
  </header>
);

export default Header;
