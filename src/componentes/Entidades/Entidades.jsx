// src/componentes/Entidades/Entidades.jsx
// Autor: Alessio Renan Aguirre Pimentel también conocido como Elazar Pimentel

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Entidades.module.css';
import { getEntidades } from '../../servicios/apiService';

const Entidades = () => {
  const [entidades, setEntidades] = useState([]);
  const [filteredEntidades, setFilteredEntidades] = useState([]);
  const [selectedTipo, setSelectedTipo] = useState('all');
  const [tipos, setTipos] = useState(new Set());

  useEffect(() => {
    const fetchEntidades = async () => {
      try {
        const data = await getEntidades();
        setEntidades(data);
        setFilteredEntidades(data);
        // Extract unique tipos
        const uniqueTipos = new Set(data.map(entidad => entidad.tipoNombre));
        setTipos(uniqueTipos);
      } catch (error) {
        console.error('Error al obtener las entidades:', error);
      }
    };
    fetchEntidades();
  }, []);

  const handleFilterChange = (e) => {
    const tipo = e.target.value;
    setSelectedTipo(tipo);
    
    if (tipo === 'all') {
      setFilteredEntidades(entidades);
    } else {
      const filtered = entidades.filter(entidad => entidad.tipoNombre === tipo);
      setFilteredEntidades(filtered);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.filterContainer}>
        <select 
          value={selectedTipo}
          onChange={handleFilterChange}
          className={styles.filterSelect}
        >
          <option value="all">Todos los tipos</option>
          {[...tipos].map((tipo) => (
            <option key={tipo} value={tipo}>
              {tipo}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.container}>
        {filteredEntidades.map((entidad) => (
          <Link to={`/entidades/${entidad.id}`} key={entidad.id} className={styles.cardLink}>
            <div className={styles.card}>
              <h3>{entidad.nombre}</h3>
              <p>Tipo: {entidad.tipoNombre}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Entidades;
