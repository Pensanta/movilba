/* src/componentes/Admin.jsx */
/* Autor: Alessio Renan Aguirre Pimentel también conocido como Elazar Pimentel */

import React from 'react';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';

const Admin = () => {
  return (
    <div>
      <h2>Administración</h2>
      <ErrorMessage message="Acceso restringido. Solo administradores autorizados." />
      <p>Contenido de Administración.</p>
    </div>
  );
};

export default Admin;
