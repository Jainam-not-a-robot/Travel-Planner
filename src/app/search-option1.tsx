'use client'
import Select from "react-select";
import Image from "next/image";
export function Search(){
    const place = [
  { value: "Andhra Pradesh", label: "Andhra Pradesh" },
  { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
  { value: "Assam", label: "Assam" },
  { value: "Bihar", label: "Bihar" },
  { value: "Chhattisgarh", label: "Chhattisgarh" },
  { value: "Goa", label: "Goa" },
  { value: "Gujarat", label: "Gujarat" },
  { value: "Haryana", label: "Haryana" },
  { value: "Himachal Pradesh", label: "Himachal Pradesh" },
  { value: "Jharkhand", label: "Jharkhand" },
  { value: "Karnataka", label: "Karnataka" },
  { value: "Kerala", label: "Kerala" },
  { value: "Madhya Pradesh", label: "Madhya Pradesh" },
  { value: "Maharashtra", label: "Maharashtra" },
  { value: "Manipur", label: "Manipur" },
  { value: "Meghalaya", label: "Meghalaya" },
  { value: "Mizoram", label: "Mizoram" },
  { value: "Nagaland", label: "Nagaland" },
  { value: "Odisha", label: "Odisha" },
  { value: "Punjab", label: "Punjab" },
  { value: "Rajasthan", label: "Rajasthan" },
  { value: "Sikkim", label: "Sikkim" },
  { value: "Tamil Nadu", label: "Tamil Nadu" },
  { value: "Telangana", label: "Telangana" },
  { value: "Tripura", label: "Tripura" },
  { value: "Uttar Pradesh", label: "Uttar Pradesh" },
  { value: "Uttarakhand", label: "Uttarakhand" },
  { value: "West Bengal", label: "West Bengal" },
  { value: "Andaman and Nicobar Islands", label: "Andaman and Nicobar Islands" },
  { value: "Chandigarh", label: "Chandigarh" },
  { value: "Dadra and Nagar Haveli and Daman and Diu", label: "Dadra and Nagar Haveli and Daman and Diu" },
  { value: "Delhi", label: "Delhi" },
  { value: "Jammu and Kashmir", label: "Jammu and Kashmir" },
  { value: "Ladakh", label: "Ladakh" },
  { value: "Lakshadweep", label: "Lakshadweep" },
  { value: "Puducherry", label: "Puducherry" },
];

    return(
        <div className="flex justify-center items-center space-x-2 h-12 bg-[#FFA69E] py-10 mb-5">
  {/* Wrapper around input and icon */}
  <div className="relative">
    <Image
  src="/search-icon.webp"
  alt="search icon"
  width={16}
  height={16}
  className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none z-10"
/>
    <Select
      placeholder="Enter City"
      isSearchable
          classNamePrefix="react-select"
          options={place}
          styles={{
            control: (base) => ({
              ...base,
              borderRadius: "9999px",
              paddingLeft: "30px",
              borderColor: "#ccc",
              minHeight: "40px",
              boxShadow: "none",
            }),
            input: (base) => ({
              ...base,
              marginLeft: "4px",
            }),
          }}
    />
  </div>

  <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
    Search
  </button>
</div> 
    )
}