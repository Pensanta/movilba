/* src/componentes/ErrorMessage/ErrorMessage.jsx */
/* Autor: Alessio Renan Aguirre Pimentel también conocido como Elazar Pimentel */
import React from 'react';
import styles from './ErrorMessage.module.css';

export function ErrorMessage({ message }) {
  return (
    <div className={styles.errorContainer} role="alert">
      <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1 17h-2v-2h2v2zm0-4h-2V7h2v6z"/>
      </svg>
      <p className={styles.message}>{message}</p>
    </div>
  );
}
