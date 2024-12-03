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

export async function fetchEntidadById(id) {
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
