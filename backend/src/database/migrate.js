import pool from './pool.js';
import fs from 'fs';

async function runMigration() {
  try {
    const sql = fs.readFileSync('pool.sql', 'utf8');
    await pool.query(sql);
    console.log('Migration completed!');
  } catch (err) {
    console.error('Migration error:', err);
  } finally {
    await pool.end();
  }
}

runMigration();
