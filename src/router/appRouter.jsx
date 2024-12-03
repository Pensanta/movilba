// src/router/appRouter.jsx
// Autor: Alessio Renan Aguirre Pimentel también conocido como Elazar Pimentel

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from '../paginas/Inicio';
import Entidades from '../componentes/Entidades/Entidades';
import EntidadDetalle from '../componentes/Entidades/EntidadDetalle';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Inicio />} />
    <Route path="/entidades" element={<Entidades />} />
    <Route path="/entidades/:id" element={<EntidadDetalle />} />
  </Routes>
);

export default AppRouter;
