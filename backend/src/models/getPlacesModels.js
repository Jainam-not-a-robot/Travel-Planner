import pool from "../database/pool.js";

export const getAllPlaces = async () => {
  try {
    const result = await pool.query('SELECT * FROM "placesData"');
    return result.rows;
  } catch (err) {
    console.error('Error fetching all places:', err);
    throw new Error('Database query failed');
  }
};

export const getPlacesFromState = async (state) => {
  try {
    const result = await pool.query('SELECT * FROM "placesData" WHERE "state" = $1', [state]);
    return result.rows;
  } catch (err) {
    console.error(`Error fetching places for state "${state}":`, err);
    throw new Error('Database query failed');
  }
};
