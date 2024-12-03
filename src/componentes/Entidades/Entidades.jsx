// src/componentes/Entidades/Entidades.jsx
// Autor: Alessio Renan Aguirre Pimentel también conocido como Elazar Pimentel

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Entidades.module.css';
import { fetchEntidades } from '../../servicios/apiService';

const Entidades = () => {
  const [entidades, setEntidades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadEntidades = async () => {
      try {
        const data = await fetchEntidades();
        setEntidades(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadEntidades();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

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
