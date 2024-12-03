// src/router/appRouter.jsx
// Autor: Alessio Renan Aguirre Pimentel también conocido como Elazar Pimentel

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from '../paginas/Inicio';
import Personas from '../componentes/Personas/Personas';
import Vehiculos from '../componentes/Vehiculos/Vehiculos';
import Entidades from '../componentes/Entidades/Entidades';
import EntidadDetalle from '../componentes/Entidades/EntidadDetalle';
import Reportes from '../componentes/Reportes';
import Configuracion from '../componentes/Configuracion';
import NoEncontrado from '../paginas/NoEncontrado';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Inicio />} />
    <Route path="/entidades" element={<Entidades />} />
    <Route path="/entidades/:id" element={<EntidadDetalle />} />
    <Route path="/personas" element={<Personas />} />
    <Route path="/vehiculos" element={<Vehiculos />} />
    <Route path="/reportes" element={<Reportes />} />
    <Route path="/configuracion" element={<Configuracion />} />
    <Route path="*" element={<NoEncontrado />} />
  </Routes>
);

export default AppRouter;
