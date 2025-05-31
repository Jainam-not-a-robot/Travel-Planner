import { IndiaMap } from "./india-map"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {Search} from "./search-option1"
export default function Home() {
  return (
    <div className="w-full">
    <Search></Search>
<SidebarTrigger/>
    <div className="flex justify-center items-center">
      <IndiaMap></IndiaMap>
    </div>
    </div>
  )
}
