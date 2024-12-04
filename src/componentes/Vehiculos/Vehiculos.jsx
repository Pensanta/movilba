// src/componentes/Vehiculos/Vehiculos.jsx
// Autor: Alessio Renan Aguirre Pimentel también conocido como Elazar Pimentel


import React, { useState, useEffect } from 'react';
import { getVehiculos } from '../../services/apiService';
import styles from './Vehiculos.module.css';

const Vehiculos = () => {
  const [vehiculos, setVehiculos] = useState([]);

  useEffect(() => {
    const fetchVehiculos = async () => {
      try {
        const vehiculosData = await getVehiculos();
        setVehiculos(vehiculosData);
      } catch (error) {
        console.error('Error al obtener los vehículos:', error);
      }
    };
    fetchVehiculos();
  }, []);

  return (
    <div className="container">
      <h2>Gestión de Vehículos</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Año</th>
            <th>Placa</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {vehiculos.map((vehiculo) => (
            <tr key={vehiculo.id}>
              <td>{vehiculo.marcaVehiculo}</td>
              <td>{vehiculo.modelo}</td>
              <td>{vehiculo.año}</td>
              <td>{vehiculo.placa}</td>
              <td>{vehiculo.tipoNombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Vehiculos;
