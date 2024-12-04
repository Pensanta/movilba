// filename: src/database.js
// autor: Alessio Aguirre Pimentel también conocido como Elazar Pimentel

import sqlWasmUrl from 'sql.js/dist/sql-wasm.wasm?url'
import initSqlJs from 'sql.js'

let db = null;

export const initDatabase = async () => {
  try {
    const SQL = await initSqlJs({
      locateFile: () => sqlWasmUrl
    });
    db = new SQL.Database();
    return db;
  } catch (err) {
    console.error('Failed to initialize database:', err);
    throw err;
  }
};

export function executeQuery(query, params = []) {
  if (!db) {
    throw new Error('Database not initialized. Call initDatabase() first.');
  }
  
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