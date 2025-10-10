'use client';
import { useState, useContext } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { UserContext } from './../context_selectedPlace';
import FilterBtn from './filterbtn';

export function Search() {
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
    setFiltered(places);
  };

  const handleBlur = () => {
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
    <div className="relative w-full max-w-3xl mx-auto mt-16">
      {/* Input Row */}
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-4">
        {/* Search Input */}
        <div className="relative flex-grow w-full">
          <input
            type="search"
            value={selectedPlace}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Enter State or Union Territory"
            className="w-full border border-gray-300 rounded-full py-2.5 px-5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-sm transition-all"
          />

          {/* Dropdown */}
          {filtered.length > 0 && (
            <ul className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-56 overflow-y-auto z-20">
              {filtered.map((place, i) => (
                <li
                  key={i}
                  onMouseDown={() => handleSelect(place)}
                  className="px-4 py-2 text-gray-700 hover:bg-blue-100 cursor-pointer transition-colors"
                >
                  {place}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Filter Button */}
        <FilterBtn />
      </div>
    </div>
  );
}
