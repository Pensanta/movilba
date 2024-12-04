// src/componentes/Personas/Personas.jsx
// Autor: Alessio Renan Aguirre Pimentel también conocido como Elazar Pimentel

import React, { useState, useEffect } from 'react';
import styles from './Personas.module.css';
import { getPersonas } from '../../services/apiService';

const Personas = () => {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    const fetchPersonas = async () => {
      try {
        const personasData = await getPersonas();
        setPersonas(personasData);
      } catch (error) {
        console.error('Error al obtener las personas:', error);
      }
    };
    fetchPersonas();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Lista de Personas</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Rol</th>
            <th>DNI</th>
            <th>Teléfono</th>
            <th>Email</th>
            <th>Entidad</th>
          </tr>
        </thead>
        <tbody>
          {personas.map((persona) => (
            <tr key={persona.id}>
              <td>{persona.nombre}</td>
              <td>{persona.rol}</td>
              <td>{persona.dni}</td>
              <td>{persona.telefono}</td>
              <td>{persona.email}</td>
              <td>{persona.nombreEntidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Personas;
