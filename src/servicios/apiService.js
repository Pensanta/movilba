// src/servicios/apiService.js
// Autor: Alessio Renan Aguirre Pimentel también conocido como Elazar Pimentel

// Datos Mock (Se reemplazarán con llamadas a una API real en el futuro)

// Tipos de Entidades
const tiposEntidades = [
  { id: 10, tipo: "Transporte de Colectivos" },
  { id: 20, tipo: "Mandataria TAXI" },
  { id: 30, tipo: "Remisería" },
  { id: 40, tipo: "Transporte de Fantasía" },
  { id: 50, tipo: "Entidad Civil" },
];

// Entidades
const entidades = [
  { id: 10, nombre: "Bondibus SRL", tipo: 10 },
  { id: 20, nombre: "Taxi del Plata", tipo: 20 },
  { id: 30, nombre: "Remisería el Gallo", tipo: 30 },
  { id: 40, nombre: "Tren de la Felicidad", tipo: 40 },
  { id: 50, nombre: "Clásicos Antiguos S.A.", tipo: 50 },
  { id: 80, nombre: "Colectivos S.A.", tipo: 10 },
];

// Tipos de Vehículos
const tiposVehiculos = [
  { id: 10, tipo: "Colectivo" },
  { id: 20, tipo: "Taxi" },
  { id: 30, tipo: "Remís" },
  { id: 40, tipo: "Transporte de Fantasía" },
  { id: 50, tipo: "Clásico" },
];

// Vehículos
const vehiculos = [
  // Colectivos (Tipo 10)
  { id: 110, marcaVehiculo: 'Mercedes Benz', modelo: 'RT40', año: 2020, placa: 'ABC123', tipo: 10, entidad: 10 },
  { id: 111, marcaVehiculo: 'SCANIA', modelo: 'R450', año: 2021, placa: 'DEF456', tipo: 10, entidad: 10 },
  { id: 112, marcaVehiculo: 'Volvo', modelo: '7900', año: 2019, placa: 'GHI789', tipo: 10, entidad: 80 },
  { id: 113, marcaVehiculo: 'MAN', modelo: 'Lion’s City', año: 2018, placa: 'JKL012', tipo: 10, entidad: 80 },
  { id: 114, marcaVehiculo: 'Iveco', modelo: 'Urbanway', año: 2020, placa: 'MNO345', tipo: 10, entidad: 10 },
  { id: 115, marcaVehiculo: 'Mercedes Benz', modelo: 'Citaro', año: 2021, placa: 'PQR678', tipo: 10, entidad: 80 },
  { id: 116, marcaVehiculo: 'Scania', modelo: 'Citywide', año: 2019, placa: 'STU901', tipo: 10, entidad: 10 },
  { id: 117, marcaVehiculo: 'Volvo', modelo: 'B8RLE', año: 2022, placa: 'VWX234', tipo: 10, entidad: 80 },
  { id: 118, marcaVehiculo: 'MAN', modelo: 'A95', año: 2021, placa: 'YZA567', tipo: 10, entidad: 80 },
  { id: 119, marcaVehiculo: 'Iveco', modelo: 'Crossway', año: 2020, placa: 'BCD890', tipo: 10, entidad: 10 },

  // Taxis (Tipo 20)
  { id: 210, marcaVehiculo: 'Chevrolet', modelo: 'Camaro', año: 2022, placa: 'EFG123', tipo: 20, entidad: 20 },
  { id: 211, marcaVehiculo: 'Volkswagen', modelo: 'Golf', año: 2023, placa: 'HIJ456', tipo: 20, entidad: 20 },
  { id: 212, marcaVehiculo: 'Toyota', modelo: 'Corolla', año: 2019, placa: 'MNO345', tipo: 20, entidad: 20 },
  { id: 213, marcaVehiculo: 'Hyundai', modelo: 'Elantra', año: 2020, placa: 'PQR678', tipo: 20, entidad: 20 },
  { id: 214, marcaVehiculo: 'Ford', modelo: 'Focus', año: 2021, placa: 'STU901', tipo: 20, entidad: 20 },
  { id: 215, marcaVehiculo: 'Chevrolet', modelo: 'Cruze', año: 2018, placa: 'VWX234', tipo: 20, entidad: 20 },
  { id: 216, marcaVehiculo: 'Honda', modelo: 'Civic', año: 2022, placa: 'YZA567', tipo: 20, entidad: 20 },
  { id: 217, marcaVehiculo: 'Nissan', modelo: 'Sentra', año: 2019, placa: 'BCD890', tipo: 20, entidad: 20 },
  { id: 218, marcaVehiculo: 'Kia', modelo: 'Forte', año: 2020, placa: 'EFG123', tipo: 20, entidad: 20 },
  { id: 219, marcaVehiculo: 'Volkswagen', modelo: 'Jetta', año: 2021, placa: 'HIJ456', tipo: 20, entidad: 20 },

  // Remises (Tipo 30)
  { id: 310, marcaVehiculo: 'Mercedes-Benz', modelo: 'Clase C', año: 2024, placa: 'MNO345', tipo: 30, entidad: 30 },
  { id: 311, marcaVehiculo: 'Ford', modelo: 'Fiesta', año: 2020, placa: 'BBC333', tipo: 30, entidad: 30 },
  { id: 312, marcaVehiculo: 'Chevrolet', modelo: 'Onix', año: 2021, placa: 'OPQ789', tipo: 30, entidad: 30 },
  { id: 313, marcaVehiculo: 'Renault', modelo: 'Logan', año: 2022, placa: 'RST012', tipo: 30, entidad: 30 },
  { id: 314, marcaVehiculo: 'Peugeot', modelo: '208', año: 2019, placa: 'UVW345', tipo: 30, entidad: 30 },
  { id: 315, marcaVehiculo: 'Fiat', modelo: 'Cronos', año: 2020, placa: 'XYZ678', tipo: 30, entidad: 30 },
  { id: 316, marcaVehiculo: 'Citroen', modelo: 'C3', año: 2021, placa: 'ABC901', tipo: 30, entidad: 30 },
  { id: 317, marcaVehiculo: 'Toyota', modelo: 'Etios', año: 2018, placa: 'DEF234', tipo: 30, entidad: 30 },
  { id: 318, marcaVehiculo: 'Volkswagen', modelo: 'Voyage', año: 2019, placa: 'GHI567', tipo: 30, entidad: 30 },
  { id: 319, marcaVehiculo: 'Honda', modelo: 'City', año: 2022, placa: 'JKL890', tipo: 30, entidad: 30 },

  // Transporte de Fantasía (Tipo 40)
  { id: 410, marcaVehiculo: 'Chevrolet', modelo: 'Bel Air', año: 1940, placa: '1345323', tipo: 40, entidad: 40 },
  { id: 411, marcaVehiculo: 'Ford', modelo: 'Model T', año: 1927, placa: 'DEF456', tipo: 40, entidad: 40 },
  { id: 412, marcaVehiculo: 'Rolls-Royce', modelo: 'Silver Ghost', año: 1915, placa: 'GHI789', tipo: 40, entidad: 40 },
  { id: 413, marcaVehiculo: 'Bugatti', modelo: 'Type 35', año: 1930, placa: 'JKL012', tipo: 40, entidad: 40 },
  { id: 414, marcaVehiculo: 'Mercedes-Benz', modelo: '300SL', año: 1955, placa: 'MNO345', tipo: 40, entidad: 40 },
  { id: 415, marcaVehiculo: 'Porsche', modelo: '356', año: 1960, placa: 'PQR678', tipo: 40, entidad: 40 },
  { id: 416, marcaVehiculo: 'Aston Martin', modelo: 'DB5', año: 1964, placa: 'STU901', tipo: 40, entidad: 40 },
  { id: 417, marcaVehiculo: 'Ferrari', modelo: '250 GTO', año: 1962, placa: 'VWX234', tipo: 40, entidad: 40 },
  { id: 418, marcaVehiculo: 'Jaguar', modelo: 'E-Type', año: 1961, placa: 'YZA567', tipo: 40, entidad: 40 },
  { id: 419, marcaVehiculo: 'Alfa Romeo', modelo: 'Giulia', año: 1965, placa: 'BCD890', tipo: 40, entidad: 40 },

  // Clásicos (Tipo 50)
  { id: 510, marcaVehiculo: 'Chevrolet', modelo: 'Bel Air', año: 1957, placa: 'EFG123', tipo: 50, entidad: 50 },
  { id: 511, marcaVehiculo: 'Ford', modelo: 'Mustang', año: 1965, placa: 'HIJ456', tipo: 50, entidad: 50 },
  { id: 512, marcaVehiculo: 'Volkswagen', modelo: 'Beetle', año: 1970, placa: 'KLM789', tipo: 50, entidad: 50 },
  { id: 513, marcaVehiculo: 'Dodge', modelo: 'Charger', año: 1969, placa: 'NOP012', tipo: 50, entidad: 50 },
  { id: 514, marcaVehiculo: 'Chevrolet', modelo: 'Corvette', año: 1963, placa: 'QRS345', tipo: 50, entidad: 50 },
  { id: 515, marcaVehiculo: 'Pontiac', modelo: 'GTO', año: 1967, placa: 'TUV678', tipo: 50, entidad: 50 },
  { id: 516, marcaVehiculo: 'Plymouth', modelo: 'Barracuda', año: 1971, placa: 'WXY901', tipo: 50, entidad: 50 },
  { id: 517, marcaVehiculo: 'Oldsmobile', modelo: '442', año: 1970, placa: 'ZAB234', tipo: 50, entidad: 50 },
  { id: 518, marcaVehiculo: 'Mercury', modelo: 'Cougar', año: 1968, placa: 'CDE567', tipo: 50, entidad: 50 },
  { id: 519, marcaVehiculo: 'Buick', modelo: 'Skylark', año: 1965, placa: 'FGH890', tipo: 50, entidad: 50 },
];

// Personas
const personas = [
  { id: 1, nombre: "Juan Pérez", dni: 12345678, telefono: 123456789, email: "juan.perez@example.com", tipoDePersona: 1, entidad: 10 },
  { id: 2, nombre: "María Gómez", dni: 87654321, telefono: 987654321, email: "maria.gomez@example.com", tipoDePersona: 2, entidad: 20 },
  { id: 3, nombre: "Luis López", dni: 11223344, telefono: 112233445, email: "luis.lopez@example.com", tipoDePersona: 3, entidad: 30 },
  { id: 4, nombre: "Ana Torres", dni: 55667788, telefono: 556677889, email: "ana.torres@example.com", tipoDePersona: 4, entidad: 40 },
  { id: 5, nombre: "Carlos García", dni: 99887766, telefono: 998877665, email: "carlos.garcia@example.com", tipoDePersona: 5, entidad: 50 },
  { id: 6, nombre: "Laura Rodríguez", dni: 12312312, telefono: 123123123, email: "laura.rodriguez@example.com", tipoDePersona: 6, entidad: 80 },
];

// Tipos de Persona
const tipoDePersona = [
  { id: 1, tipo: "Chofer Colectivo" },
  { id: 2, tipo: "Chofer Taxi" },
  { id: 3, tipo: "Chofer Remis" },
  { id: 4, tipo: "Dueño de Vehículo" },
  { id: 5, tipo: "Representante Legal" },
  { id: 6, tipo: "Inspector" },
];

// Simular retraso de red
const fakeDelay = 0;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Función para obtener todas las entidades
export const getEntidades = async () => {
  await delay(fakeDelay);
  const entidadesConTipo = entidades.map((entidad) => {
    const tipo = tiposEntidades.find((t) => t.id === entidad.tipo);
    return { ...entidad, tipoNombre: tipo ? tipo.tipo : "Desconocido" };
  });
  return entidadesConTipo;
};

// Función para obtener una entidad por ID
export const getEntidadById = async (id) => {
  await delay(fakeDelay);
  const entidad = entidades.find((ent) => ent.id === id);
  if (entidad) {
    const tipo = tiposEntidades.find((t) => t.id === entidad.tipo);
    return { ...entidad, tipoNombre: tipo ? tipo.tipo : 'Desconocido' };
  }
  throw new Error('Entidad no encontrada');
};

// Función para obtener vehículos por ID de entidad
export const getVehiculosByEntidadId = async (entidadId) => {
  await delay(fakeDelay);
  const vehiculosFiltrados = vehiculos
    .filter((vehiculo) => vehiculo.entidad === entidadId)
    .map((vehiculo) => {
      const tipo = tiposVehiculos.find((t) => t.id === vehiculo.tipo);
      return { ...vehiculo, tipoNombre: tipo ? tipo.tipo : 'Desconocido' };
    });
  return vehiculosFiltrados;
};

// Función para obtener todas las personas
export const getPersonas = async () => {
  await delay(fakeDelay);
  const personasConRolYEntidad = personas.map((persona) => {
    const tipo = tipoDePersona.find((t) => t.id === persona.tipoDePersona);
    const entidad = entidades.find((e) => e.id === persona.entidad);
    return {
      ...persona,
      rol: tipo ? tipo.tipo : "Desconocido",
      nombreEntidad: entidad ? entidad.nombre : "Sin entidad",
    };
  });
  return personasConRolYEntidad;
};
// Función para obtener todos los vehículos
export const getVehiculos = async () => {
  await delay(fakeDelay);
  const vehiculosConTipo = vehiculos.map((vehiculo) => {
    const tipo = tiposVehiculos.find((t) => t.id === vehiculo.tipo);
    return { ...vehiculo, tipoNombre: tipo ? tipo.tipo : "Desconocido" };
  });
  return vehiculosConTipo;
};
