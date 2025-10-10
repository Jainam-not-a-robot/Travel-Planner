'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { UserContext } from './context_selectedPlace';
import { usePathname } from 'next/navigation';
export default function Search() {
  const router = useRouter()
  const context = useContext(UserContext);
  const pathname=usePathname()
  if (!context) {
    throw new Error("useContext must be used inside a UserProvider");
  }
  const { selectedPlace, setSelectedPlace } = context;
  const changingRoute = () => {
    if(pathname==="/")router.push("/places");
  }
  const places = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry"
  ];

  const [filtered, setFiltered] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedPlace(value);

    if (value.trim() === "") {
      setFiltered(places);
      return;
    }

    const suggestions = places.filter(p =>
      p.toLowerCase().startsWith(value.toLowerCase())
    );

    setFiltered(suggestions);
  };

  const handleFocus = () => {
    setFiltered(places); // show all when focused
  };

  const handleBlur = () => {
    // small delay so clicking a list item still works
    setTimeout(() => setFiltered([]), 100);
  };

  const handleSelect = (place) => {
    setSelectedPlace(place);
    setFiltered([]);
  };

  return (
    <div className="relative w-128 mx-auto mt-16">
      <div className='flex items-center gap-8 mb-4'>
        <input
          type="search"
          value={selectedPlace}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Enter State"
          className="w-full border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button className="bg-[#239BA7] text-white px-4 py-2 rounded-full hover:bg-blue-600 hover:cursor-pointer hover:shadow-xl" onClick={changingRoute}>
          Search
        </button>
      </div>
      {filtered.length > 0 && (
        <ul className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-md max-h-48 overflow-y-auto z-10">
          {filtered.map((place, i) => (
            <li
              key={i}
              onMouseDown={() => handleSelect(place)} // use onMouseDown instead of onClick
              className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
            >
              {place}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
