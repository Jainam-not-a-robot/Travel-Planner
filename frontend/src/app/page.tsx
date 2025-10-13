import { IndiaMap } from "./india-map"
import Search from "./search-option1"
import NavCard from "./NavCard"
import '@/app/india-map.css'
export default function Home() {
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
