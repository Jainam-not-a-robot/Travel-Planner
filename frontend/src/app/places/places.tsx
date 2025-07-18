'use client'
import Card from "./placesCard";
import axios from 'axios';
import { useContext,useEffect,useState } from "react";
import { UserContext } from "../context_selectedPlace";
export default function Places(){
  const context = useContext(UserContext);
  const [places,setPlaces]=useState([]);
  if (!context) {
    throw new Error("useContext must be used inside a UserProvider");
  }
  const {selectedPlace,setSelectedPlace}=context;
  useEffect(()=>{
    axios.get(`http://localhost:8000/api/places/states/${selectedPlace}`).then(response => {
    setPlaces(response.data.places);
  })
  .catch(error => {
    console.error(error);
  });
  },[selectedPlace])
  async function gettingLocation(){
      navigator.geolocation.watchPosition(
        (pos) => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;
  },
  (err) => {
    console.error("Error:", err.message);
  }
);
    }
    if(places){
      return(
    <div className="flex flex-row w-screen flex-wrap">
      {places.map((place)=>(
        <Card place={place} key={place.id}/>
      ))}
    </div>
    )
    }
    
}
