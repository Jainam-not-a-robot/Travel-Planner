import pool from './db.js';
import fs from 'fs';

async function runMigration() {
  try {
    const sql = fs.readFileSync('mydb.sql', 'utf8');
    await pool.query(sql);
    console.log('Migration completed!');
  } catch (err) {
    console.error('Migration error:', err);
  } finally {
    await pool.end();
  }
}

runMigration();
