'use client'
import Image from "next/image"
import { useContext } from "react"
import { UserContext } from "../context_selectedPlace"

const options = [
  { value: 'distance', label: 'Distance' },
  { value: 'rating', label: 'Rating' },
]

export default function FilterBtn() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("FilterBtn must be used within a UserProvider");
  }
  const { selectedOption, setSelectedOption } = context;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const option = options.find(opt => opt.value === value) || null;
    setSelectedOption(option);
  };

  return (
    <div className="mx-4 w-64">
      <div className="flex items-center gap-2 w-full rounded-full bg-gray-200 hover:bg-gray-300 transition-colors px-4 py-2 shadow cursor-pointer">
        <Image
          src="/filter_btn.png"
          alt="Filter"
          height={18}
          width={18}
        />
        <select
          value={selectedOption?.value || ""}
          onChange={handleChange}
          className="bg-transparent outline-none text-xl font-medium w-full cursor-pointer"
        >
          <option value="" disabled>
            Filter
          </option>
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
