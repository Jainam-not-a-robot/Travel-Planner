import { IndiaMap } from "./india-map"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {Search} from "./search-option1"
import { UserProvider } from "./context_selectedPlace"
export default function Home() {
  return (
    <div className="w-full">
      <SidebarTrigger className="mt-32 fixed"/>
      <Search/>
    <div className="flex justify-center items-center">
      <IndiaMap/>
    </div>
    
    </div>
  )
}
