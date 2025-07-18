import Places from "./places";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Search } from "../search-option1";
export default function placesPage(){
return(
    <>
    <SidebarTrigger className="fixed mt-32"/>
    <Search/>
    <Places/>
    </>

)
}