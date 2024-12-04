// src/servicios/apiService.js
// Autor: Alessio Renan Aguirre Pimentel también conocido como Elazar Pimentel

import { executeQuery } from '../database';

export async function fetchEntidades() {
  const query = `
    SELECT e.id, e.nombre, t.tipo AS tipoNombre
    FROM entidades e
    JOIN tipos_entidades t ON e.tipo = t.id
  `;
  return executeQuery(query);
}

export async function getEntidadById(id) {
  const query = `
    SELECT e.id, e.nombre, t.tipo AS tipoNombre
    FROM entidades e
    JOIN tipos_entidades t ON e.tipo = t.id
    WHERE e.id = ?
  `;
  const results = executeQuery(query, [id]);
  if (results.length === 0) {
    throw new Error('Entidad no encontrada');
  }
  return results[0];
}

export async function getVehiculosByEntidadId(entidadId) {
  const query = `
    SELECT 
      v.id,
      v.marcaVehiculo,
      v.modelo,
      v.año,
      v.placa,
      tv.tipo as tipoNombre
    FROM vehiculos v
    LEFT JOIN tipos_vehiculos tv ON v.tipo = tv.id
    WHERE v.entidad = ?
  `;
  return executeQuery(query, [entidadId]);
}

export async function getVehiculos() {
  const query = `
    SELECT 
      v.id,
      v.marcaVehiculo,
      v.modelo,
      v.año,
      v.placa,
      tv.tipo as tipoNombre,
      e.nombre as nombreEntidad
    FROM vehiculos v
    LEFT JOIN tipos_vehiculos tv ON v.tipo = tv.id
    LEFT JOIN entidades e ON v.entidad = e.id
  `;
  return executeQuery(query);
}

export async function getPersonas() {
  const query = `
    SELECT 
      p.id,
      p.nombre,
      p.rol,
      p.dni,
      p.telefono,
      p.email,
      e.nombre as nombreEntidad
    FROM personas p
    LEFT JOIN entidades e ON p.entidad_id = e.id
  `;
  return executeQuery(query);
}
