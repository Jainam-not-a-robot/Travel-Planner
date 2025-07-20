'use client'
import Image from "next/image";
import './styles.css';

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

type PlaceProps = {
  place: Place;
};

export default function CardPlaces({ place }: PlaceProps) {
  const redirectToMaps=()=>{
    window.open(`https://www.google.com/maps/search/${encodeURIComponent(place.name)}`);
  }
  return (
    <div className="flex flex-col w-80 bg-gray-300 border border-gray-200 rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all duration-300 mx-8 my-8 cursor-pointer" onClick={redirectToMaps}>
      <div className="relative w-full h-48">
        <Image
          src={`/${place.image_path}`}
          alt={place.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col flex-grow p-4">
        <h2 className="text-xl font-bold mb-2 text-center">{place.name}</h2>
        <p className="text-sm text-gray-700 flex-grow mb-4">{place.description}</p>

        <div className="flex justify-between items-center text-sm font-semibold">
          <span className="bg-blue-400 rounded-full px-3 py-1 text-gray-800">
            📍 {place.distance} km
          </span>
          <span className="bg-orange-400 rounded-full px-3 py-1 text-gray-800">
            {place.ratings?`⭐ ${place.ratings}`:"No rating"}
          </span>
        </div>
      </div>
    </div>
  );
}
