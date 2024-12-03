import initSqlJs from 'sql.js';

let db;

export async function initDatabase() {
  const SQL = await initSqlJs();
  db = new SQL.Database();

  // Define tables
  db.run(`
    CREATE TABLE entidades (id INTEGER PRIMARY KEY, nombre TEXT, tipo INTEGER);
    CREATE TABLE tipos_entidades (id INTEGER PRIMARY KEY, tipo TEXT);
    CREATE TABLE vehiculos (id INTEGER PRIMARY KEY, marcaVehiculo TEXT, modelo TEXT, año INTEGER, placa TEXT, tipo INTEGER, entidad INTEGER);
    CREATE TABLE tipos_vehiculos (id INTEGER PRIMARY KEY, tipo TEXT);
  `);

  // Insert mock data
  db.run(`
    INSERT INTO tipos_entidades (id, tipo) VALUES (10, 'Transporte de Colectivos'), (20, 'Mandataria TAXI'), (30, 'Remisería'), (40, 'Transporte de Fantasía'), (50, 'Entidad Civil');
    INSERT INTO entidades (id, nombre, tipo) VALUES (10, 'Bondibus SRL', 10), (20, 'Taxi del Plata', 20), (30, 'Remisería el Gallo', 30), (40, 'Tren de la Felicidad', 40), (50, 'Clásicos Antiguos S.A.', 50);
    -- Add more data as needed
  `);
}

export function executeQuery(query, params = []) {
  try {
    const stmt = db.prepare(query);
    stmt.bind(params);
    const results = [];
    while (stmt.step()) {
      results.push(stmt.getAsObject());
    }
    stmt.free();
    return results;
  } catch (error) {
    throw new Error(`SQL Error: ${error.message}`);
  }
} 