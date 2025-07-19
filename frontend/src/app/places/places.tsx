'use client'
import Card from "./placesCard";
import axios from 'axios';
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context_selectedPlace";

export default function Places() {
    type Place = {
        id: number;
        name: string;
        city: string;
        state: string;
        latitude: number;
        longitude: number;
        image_path: string;
        description: string;
        distance: number;
        ratings:number|null;
    };

    const context = useContext(UserContext);
    const [places, setPlaces] = useState([]); // Array with api data

    if (!context) {
        throw new Error("useContext must be used inside a UserProvider");
    }

    const { selectedPlace, setSelectedPlace } = context;

    useEffect(() => {
        axios.get(`http://localhost:8000/api/places/states/${selectedPlace}`).then(response => {
            setPlaces(response.data.places);
        })
        .catch(error => {
            console.error(error);
        });
    }, [selectedPlace]);

    const [lat, setLat] = useState<number | null>(null);
    const [lon, setLon] = useState<number | null>(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setLat(pos.coords.latitude);
                setLon(pos.coords.longitude);
            },
            (err) => {
                console.error("Error:", err.message);
            }
        );
    }, []);

    function haversine(lat1: number, lon1: number, lat2: number, lon2: number) { // This function will calculate distance
        const R = 6371;
        const toRad = (angle: number) => angle * Math.PI / 180;

        const dLat = toRad(lat2 - lat1);
        const dLon = toRad(lon2 - lon1);

        const a = Math.sin(dLat / 2) ** 2 +
                  Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
                  Math.sin(dLon / 2) ** 2;

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return Math.round(R * c * 100) / 100; // distance in km
    }

    type PlaceWithDistance = Place & {
        distance: number;
    };

    const placesWithDistance: PlaceWithDistance[] =
        lat !== null && lon !== null
            ? places.map((place: Place) => ({
                ...place,
                distance: haversine(lat, lon, place.latitude, place.longitude),
            }))
            : [];
    function sorting(l:number,r:number,arr:Place[]){
      let m=Math.floor((l+r)/2);
      let left_arr=arr.slice(l,m+1);
      let right_arr=arr.slice(m+1,r+1);
      let i=0,j=0,k=l;
      while(i<left_arr.length&&j<right_arr.length){
        if(left_arr[i].distance<right_arr[j].distance){
          arr[k++]=left_arr[i++];
        }
        else{
          arr[k++]=right_arr[j++];
        }
      }
      while(i<left_arr.length){
        arr[k++]=left_arr[i++];
      }
      while(j<right_arr.length){
        arr[k++]=right_arr[j++];
      }
    }
    function sortByDistance(l:number,r:number){
      let m=Math.floor((l+r)/2);
      if(l<r){
        sortByDistance(l,m);
        sortByDistance(m+1,r);
        sorting(l,r,placesWithDistance);
      }
    }
    sortByDistance(0,placesWithDistance.length-1)
    if (placesWithDistance) {
        return (
            <div className="flex flex-row w-screen flex-wrap">
                {placesWithDistance.map((place) => (
                    <Card place={place} key={place.id} />
                ))}
            </div>
        )
    }
}
