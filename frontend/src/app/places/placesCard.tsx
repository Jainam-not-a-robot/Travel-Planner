import Image from "next/image"
export default function CardPlaces() {
  return (
    <div className="flex flex-col w-80 bg-amber-300 border-4 rounded-2xl mx-8 h-[400px]">
      <div className="relative w-full h-1/2 my-0">
        <Image
          src="/place_images/Abbey_Falls.jpg"
          alt="Abbey Falls"
          fill
          className="object-cover rounded-tl-2xl rounded-tr-2xl"
        />
      </div>
     
        <div className="relative w-full h-1/10 my-0 font-bold text-2xl text-center">Name</div>
        <hr className="border-black"></hr>
        <div className="relative w-full h-2/5 my-0 flex flex-row">
            <div className="relative w-3/5 h-full border-r-black border-1">description</div>
            <div className="relative w-2/5 h-full flex flex-col flex-wrap">
            <div className="relative h-1/2 w-full border-b-1 border-black">
                Distance
            </div>
            <div className="relative h-1/2 w-full ">Rating</div>
            </div>
        </div>
    </div>
  )
}
