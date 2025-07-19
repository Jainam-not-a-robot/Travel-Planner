'use client'
import Image from "next/image"
import './styles.css'
export default function CardPlaces({place}) {
  return (
    <div className="flex flex-col w-80 bg-amber-300 border-4 rounded-2xl mx-8 h-[400px] items-center">
      <div className="relative w-full h-1/2 my-0">
        <Image
          src={`/${place.image_path}`}
          alt={place.name}
          fill
          className="object-cover rounded-tl-2xl rounded-tr-2xl"
        />
      </div>
     
        <div className="w-full h-1/5 my-0 font-bold flex items-center justify-center text-2xl">
        <span className="text-center leading-tight">
          {place.name}
        </span>
        </div>
        <hr className="border-black"></hr>
        <div className=" w-full h-3/10 my-0 flex flex-row">
            <div className=" w-3/5 h-full border-r-black border-1">{place.description}</div>
            <div className=" w-2/5 h-full flex flex-col flex-wrap">
            <div className=" h-1/2 w-full border-b-1 border-black text-xl">
                Distance: {place.distance} kms
            </div>
            <div className=" h-1/2 w-full">Rating</div>
            </div>
        </div>
    </div>
  )
}
