// src/componentes/Entidades/Entidades.jsx
// Autor: Alessio Renan Aguirre Pimentel también conocido como Elazar Pimentel

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Entidades.module.css';
import { getEntidades } from '../../servicios/apiService';

const Entidades = () => {
  const [entidades, setEntidades] = useState([]);

  useEffect(() => {
    const fetchEntidades = async () => {
      try {
        const data = await getEntidades();
        setEntidades(data);
      } catch (error) {
        console.error('Error al obtener las entidades:', error);
      }
    };
    fetchEntidades();
  }, []);

  return (
    <div className={styles.container}>
      {entidades.map((entidad) => (
        <Link to={`/entidades/${entidad.id}`} key={entidad.id} className={styles.cardLink}>
          <div className={styles.card}>
            <h3>{entidad.nombre}</h3>
            <p>Tipo: {entidad.tipoNombre}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Entidades;
