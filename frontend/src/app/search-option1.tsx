'use client';
import { useState, useContext } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { UserContext } from './context_selectedPlace';

export default function Search() {
  const router = useRouter();
  const pathname = usePathname();
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useContext must be used inside a UserProvider");
  }

  const { selectedPlace, setSelectedPlace } = context;

  const places: string[] = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
    "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
    "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
    "West Bengal", "Andaman and Nicobar Islands", "Chandigarh",
    "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Jammu and Kashmir",
    "Ladakh", "Lakshadweep", "Puducherry"
  ];

  const [filtered, setFiltered] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleSelect = (place: string) => {
    setSelectedPlace(place);
    setFiltered([]);
  };

  const changingRoute = () => {
    if (pathname === "/") router.push("/places");
  };

  return (
    <div className="relative max-w-128 mx-auto mt-16">
      <div className="flex flex-nowrap items-center justify-center gap-2 mb-4 w-full px-4">
        <div className="flex-grow max-w-[16rem] sm:max-w-[18rem] md:max-w-[20rem] lg:max-w-[24rem]">
          <input
            type="search"
            value={selectedPlace}
            onChange={handleChange}
            onFocus={handleFocus}
            id="search"
            onBlur={handleBlur}
            placeholder="Enter State"
            className="w-full border min-w-0 border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
          />
        </div>

        <button
          className="bg-[#239BA7] text-white min-w-0 px-3 sm:px-4 py-2 rounded-full hover:bg-blue-600 hover:cursor-pointer hover:shadow-xl flex-shrink-0 text-sm sm:text-base"
          onClick={changingRoute}
        >
          Search
        </button>
      </div>

      {filtered.length > 0 && (
        <ul className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-md max-h-48 overflow-y-auto z-10">
          {filtered.map((place, i) => (
            <li
              key={i}
              onMouseDown={() => handleSelect(place)}
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
