'use client'
import Image from "next/image"
import Select from "react-select"
import { useState } from "react"
import { useContext } from "react"
import { UserContext } from "../context_selectedPlace"

const options = [
  { value: 'distance', label: 'Distance' },
  { value: 'rating', label: 'Rating' },
]

export default function FilterBtn() {
    const context=useContext(UserContext);
    if (!context) {
        throw new Error("FilterBtn must be used within a UserProvider");
    }
    const {selectedOption,setSelectedOption}=context;
    
    console.log(selectedOption);
  return (
    <div className="mx-4 w-64">
      <Select
        options={options}
        placeholder="Filter"
        value={selectedOption}
        onChange={setSelectedOption}
        classNames={{
          valueContainer: () => "flex items-center gap-2",
          input: () => "text-xl",
          placeholder: () => "text-xl font-medium",
          singleValue: () => "text-xl font-medium",
          indicatorsContainer: () => "p-0",
        }}
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
          Control: ({ children, innerProps }) => (
            <div
              {...innerProps}
              className="flex items-center gap-2 w-full rounded-full bg-gray-200 hover:bg-gray-300 transition-colors px-4 py-2 shadow border-none"
            >
              <Image
                src="/filter_btn.png"
                alt="Filter"
                height={18}
                width={18}
              />
              {children}
            </div>
          ),
        }}
      />
    </div>
  )
}
