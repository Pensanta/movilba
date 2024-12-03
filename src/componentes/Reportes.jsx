// src/componentes/Reportes.jsx
import React from 'react';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';

const Reportes = () => {
  return (
    <div>
      <h2>Reportes</h2>
      <ErrorMessage message="Error al cargar los reportes." />
      <p>Contenido de Reportes.</p>
    </div>
  );
};

export default Reportes;
