// src/componentes/Vehiculos/Vehiculos.jsx
// Autor: Alessio Renan Aguirre Pimentel también conocido como Elazar Pimentel


// src/componentes/Vehiculos/Vehiculos.jsx
import React, { useState, useEffect } from 'react';
import { getVehiculos } from '../../servicios/apiService';

const Vehiculos = ({ tipo }) => {
  const [vehiculosFiltrados, setVehiculosFiltrados] = useState([]);

  useEffect(() => {
    const fetchVehiculos = async () => {
      try {
        const vehiculos = await getVehiculos();
        const filtrados = vehiculos.filter((vehiculo) => vehiculo.tipoNombre === tipo);
        setVehiculosFiltrados(filtrados);
      } catch (error) {
        console.error('Error al obtener los vehículos:', error);
      }
    };
    fetchVehiculos();
  }, [tipo]);

  return (
    <div>
      <h2>Gestión de {tipo}</h2>
      <ul>
        {vehiculosFiltrados.map((vehiculo) => (
          <li key={vehiculo.id}>Placa: {vehiculo.placa}</li>
        ))}
      </ul>
    </div>
  );
};

export default Vehiculos;
