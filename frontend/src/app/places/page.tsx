'use client'
import Card from "./placesCard";
export default function places(){
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
    
    return(<>
    <div className="flex flex-row w-screen flex-wrap">
    <Card/>
    </div>
    </>)
}