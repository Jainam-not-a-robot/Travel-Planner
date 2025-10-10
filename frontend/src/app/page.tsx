import { IndiaMap } from "./india-map"
import Search from "./search-option1"
import NavCard from "./NavCard"
export default function Home() {
  return (
    <div className="w-full relative">
      {/* <SidebarTrigger className="mt-32 fixed"/> */}
      <NavCard></NavCard>
      <Search/>
    <div className="flex justify-center items-center">
      <IndiaMap/>
    </div>
    
    </div>
  )
}
