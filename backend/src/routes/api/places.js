import express from 'express'
import { handleGetAllPlaces,handleGetPlacesFromState,placesVerification } from '../../controllers/getPlacesControllers.js'
const router=express.Router();
router.get('/states',handleGetAllPlaces);
router.get('/states/:state',handleGetPlacesFromState);
export default router; 
