import pool from "../database/pool";
export const getAllPlaces=async()=>{
    const places=await pool.query("SELECT * FROM 'placesData'");
    return places.rows;
}

export const getPlacesFromState=async(state)=>{
    const places=await pool.query(`SELECT * FROM 'placesData' WHERE 'state'=${state}`);
    return places.rows;
}