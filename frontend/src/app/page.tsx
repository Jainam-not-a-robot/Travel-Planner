'use client'
import { IndiaMap } from "./india-map"
import Search from "./search-option1"
import NavCard from "./NavCard"
import '@/app/india-map.css'
import { useEffect } from "react"
import axios from "axios"
export default function Home() {
  
    useEffect(()=> {
      const backendURL=process.env.NEXT_PUBLIC_BACKEND_URL;
        axios.get(`${backendURL}`)
            .then(()=>console.log("backend connecting"))
            .catch((err)=>console.log(err));
    }, []);
  return (
    <div className="w-full relative">
      {/* <SidebarTrigger className="mt-32 fixed"/> */}
      <NavCard></NavCard>
      <Search />
      <div className="flex justify-center items-center">
        <div className="div-container">
          <div className="india-map-container">
            <IndiaMap />
          </div>
        </div>
      </div>

    </div>
  )
}
