import pool from "../database/pool.js";
export const getAllPlaces=async()=>{
    const places=await pool.query('SELECT * FROM "placesData"');
    return places.rows;
}

export const getPlacesFromState=async(state)=>{
    const places=await pool.query('SELECT * FROM "placesData" WHERE "state" = $1', [state]);
    return places.rows;
}