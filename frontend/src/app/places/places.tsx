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
  const [lat, setLat] = useState<number | null>(null);
  const [lon, setLon] = useState<number | null>(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLat(pos.coords.latitude);
        setLon(pos.coords.longitude);
        console.log("Location:", pos.coords.latitude, pos.coords.longitude);
      },
      (err) => {
        console.error("Error:", err.message);
      }
    );
  }, []);

  function haversine(lat1:number, lon1:number, lat2:number, lon2:number) {
  const R = 6371; // Earth radius in km
  const toRad = (angle:number) => angle * Math.PI / 180;

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a = Math.sin(dLat/2) ** 2 +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon/2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return Math.round(R * c*100)/100; // distance in km
}
  type Place = {
  id:number;
  name: string;
  city:string;
  state:string;
  latitude: number;
  longitude: number;
};
  type PlaceWithDistance = Place & {
  distance: number;
};
  const placesWithDistance: PlaceWithDistance[] =
    lat !== null && lon !== null
      ? places.map((place) => ({
          ...place,
          distance: haversine(lat, lon, place.latitude, place.longitude),
        }))
      : [];
    if(placesWithDistance){
      return(
    <div className="flex flex-row w-screen flex-wrap">
      {placesWithDistance.map((place)=>(
        <Card place={place} key={place.id}/>
      ))}
    </div>
    )
    }
    
}
