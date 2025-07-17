import pool from "../database/pool";
import { getAllPlaces, getPlacesFromState} from "../models/getPlacesModels";

export const handleGetAllPlaces=async(req,res)=>{
    try{
        const places=await getAllPlaces();
        res.status(200).json({places});
    }
    catch(err){
        res.status(500).json({ error: "Something went wrong" });
    }
}

export const handleGetPlacesFromState=async(req,res)=>{
    try{
        const places=await getPlacesFromState(req.params.state);
        res.status(200).json({places});
    }
    catch(err){
        res.status(500).json({ error: "Something went wrong" });
    }
}