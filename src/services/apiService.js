import db from '../data/db';

export const getPersonas = async () => {
  return await db.personas.toArray();
};

export const getEntidades = async () => {
  return await db.entidades
    .toArray()
    .then(entidades => 
      Promise.all(entidades.map(async entidad => {
        const tipoEntidad = await db.tipos_entidades.get(entidad.tipo);
        return { ...entidad, tipoNombre: tipoEntidad.tipo };
      }))
    );
};

export const getEntidadById = async (id) => {
  const entidad = await db.entidades.get(id);
  if (!entidad) throw new Error('Entidad no encontrada');
  const tipoEntidad = await db.tipos_entidades.get(entidad.tipo);
  return { ...entidad, tipoNombre: tipoEntidad.tipo };
};

export const getVehiculosByEntidadId = async (entidadId) => {
  return await db.vehiculos
    .where('entidad').equals(entidadId)
    .toArray()
    .then(vehiculos =>
      Promise.all(vehiculos.map(async vehiculo => {
        const tipoVehiculo = await db.tipos_vehiculos.get(vehiculo.tipo);
        return { ...vehiculo, tipoNombre: tipoVehiculo.tipo };
      }))
    );
};

export const getVehiculos = async () => {
  return await db.vehiculos
    .toArray()
    .then(vehiculos =>
      Promise.all(vehiculos.map(async vehiculo => {
        const tipoVehiculo = await db.tipos_vehiculos.get(vehiculo.tipo);
        return { ...vehiculo, tipoNombre: tipoVehiculo.tipo };
      }))
    );
};

// Add other API functions as needed