// src/componentes/Entidades/EntidadDetalle.jsx
// Autor: Alessio Renan Aguirre Pimentel también conocido como Elazar Pimentel

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './EntidadDetalle.module.css';
import { getEntidadById, getVehiculosByEntidadId } from '../../services/apiService';

const EntidadDetalle = () => {
  const { id } = useParams();
  const [entidad, setEntidad] = useState(null);
  const [vehiculos, setVehiculos] = useState([]);

  useEffect(() => {
    const fetchEntidad = async () => {
      try {
        const entidadData = await getEntidadById(parseInt(id));
        setEntidad(entidadData);
      } catch (error) {
        console.error('Error al obtener la entidad:', error);
      }
    };

    const fetchVehiculos = async () => {
      try {
        const vehiculosData = await getVehiculosByEntidadId(parseInt(id));
        setVehiculos(vehiculosData);
      } catch (error) {
        console.error('Error al obtener los vehículos:', error);
      }
    };

    fetchEntidad();
    fetchVehiculos();
  }, [id]);

  if (!entidad) {
    return <p>Cargando entidad...</p>;
  }

  return (
    <div className={styles.container}>
      <h2>{entidad.nombre}</h2>
      <p>Tipo: {entidad.tipoNombre}</p>
      <h3>Vehículos Asignados:</h3>
      <div className={styles.vehiculosContainer}>
        {vehiculos.length > 0 ? (
          vehiculos.map((vehiculo) => (
            <div key={vehiculo.id} className={styles.card}>
              <h4>{vehiculo.marcaVehiculo} {vehiculo.modelo}</h4>
              <p>Año: {vehiculo.año}</p>
              <p>Placa: {vehiculo.placa}</p>
              <p>Tipo: {vehiculo.tipoNombre}</p>
            </div>
          ))
        ) : (
          <p>No hay vehículos asignados a esta entidad.</p>
        )}
      </div>
    </div>
  );
};

export default EntidadDetalle;
