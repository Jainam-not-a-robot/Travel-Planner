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
        ratings: number | null;
    };

    const context = useContext(UserContext);
    const [places, setPlaces] = useState<Place[]>([]); // typed array

    if (!context) {
        throw new Error("useContext must be used inside a UserProvider");
    }

    const { selectedPlace, selectedOption } = context;
    const backendURL=process.env.NEXT_PUBLIC_BACKEND_URL;
    useEffect(() => {
        axios.get<{ places: Place[] }>(`${backendURL}/api/places/states/${selectedPlace}`)
            .then(response => setPlaces(response.data.places))
            .catch(error => console.error(error));
    }, [selectedPlace]);

    const [lat, setLat] = useState<number | null>(null);
    const [lon, setLon] = useState<number | null>(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setLat(pos.coords.latitude);
                setLon(pos.coords.longitude);
            },
            (err) => console.error("Error:", err.message)
        );
    }, []);

    function haversine(lat1: number, lon1: number, lat2: number, lon2: number) {
        const R = 6371;
        const toRad = (angle: number) => angle * Math.PI / 180;
        const dLat = toRad(lat2 - lat1);
        const dLon = toRad(lon2 - lon1);
        const a = Math.sin(dLat / 2) ** 2 +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon / 2) ** 2;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return Math.round(R * 100 * c) / 100; // distance in km
    }

    type PlaceWithDistance = Place & { distance: number };
    const placesWithDistance: PlaceWithDistance[] =
        lat !== null && lon !== null
            ? places.map(place => ({
                ...place,
                distance: haversine(lat, lon, place.latitude, place.longitude),
            }))
            : [];

    function sorting(l: number, r: number, arr: PlaceWithDistance[]) {
        const m = Math.floor((l + r) / 2);
        const left_arr = arr.slice(l, m + 1);
        const right_arr = arr.slice(m + 1, r + 1);
        let i = 0, j = 0, k = l;

        while (i < left_arr.length && j < right_arr.length) {
            if (!selectedOption || selectedOption.value === "distance") {
                if (left_arr[i].distance < right_arr[j].distance) arr[k++] = left_arr[i++];
                else arr[k++] = right_arr[j++];
            } else if (selectedOption.value === "rating") {
                const leftRating = left_arr[i].ratings ?? 0;
                const rightRating = right_arr[j].ratings ?? 0;
                if (leftRating < rightRating) arr[k++] = right_arr[j++];
                else arr[k++] = left_arr[i++];
            }
        }
        while (i < left_arr.length) arr[k++] = left_arr[i++];
        while (j < right_arr.length) arr[k++] = right_arr[j++];
    }

    function sortByDistance(l: number, r: number, arr: PlaceWithDistance[]) {
        if (l < r) {
            const m = Math.floor((l + r) / 2);
            sortByDistance(l, m, arr);
            sortByDistance(m + 1, r, arr);
            sorting(l, r, arr);
        }
    }

    sortByDistance(0, placesWithDistance.length - 1, placesWithDistance);

    return (
        <div className="flex flex-wrap justify-center gap-6 p-4">
            {placesWithDistance.map(place => (
                <Card key={place.id} place={place} />
            ))}
        </div>
    );
}
