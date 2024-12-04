import Dexie from 'dexie';

const db = new Dexie('MovilBA');

db.version(1).stores({
  personas: '++id, nombre, apellido, dni, telefono, email, entidad_id',
  entidades: '++id, nombre, tipo',
  vehiculos: '++id, marcaVehiculo, modelo, año, placa, tipo, entidad',
  tipos_vehiculos: '++id, tipo',
  tipos_entidades: '++id, tipo'
});

// Sample data
db.on('populate', async () => {
  // Add sample tipos_entidades
  await db.tipos_entidades.bulkAdd([
    { tipo: 'Empresa' },
    { tipo: 'Cooperativa' }
  ]);

  // Add sample tipos_vehiculos
  await db.tipos_vehiculos.bulkAdd([
    { tipo: 'Colectivo' },
    { tipo: 'Taxi' },
    { tipo: 'Remis' }
  ]);

  // Add sample entidades
  await db.entidades.bulkAdd([
    { nombre: 'Empresa A', tipo: 1 },
    { nombre: 'Cooperativa B', tipo: 2 }
  ]);

  // Add sample personas
  await db.personas.bulkAdd([
    { nombre: 'Juan Pérez', dni: '12345678', telefono: '1234567890', email: 'juan@example.com', entidad_id: 1 },
    { nombre: 'María González', dni: '87654321', telefono: '0987654321', email: 'maria@example.com', entidad_id: 2 }
  ]);

  // Add sample vehiculos
  await db.vehiculos.bulkAdd([
    { 
      marcaVehiculo: 'Mercedes Benz',
      modelo: 'OF-1721',
      año: 2022,
      placa: 'AB123CD',
      tipo: 1, // Colectivo
      entidad: 1
    },
    { 
      marcaVehiculo: 'Toyota',
      modelo: 'Corolla',
      año: 2021,
      placa: 'XY789ZW',
      tipo: 2, // Taxi
      entidad: 1
    },
    { 
      marcaVehiculo: 'Volkswagen',
      modelo: 'Vento',
      año: 2023,
      placa: 'QR456ST',
      tipo: 3, // Remis
      entidad: 2
    }
  ]);
});

export default db; 