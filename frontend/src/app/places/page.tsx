import Places from "./places";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Search } from "./searchOption2";
import NavCard from "../NavCard";
export default function placesPage(){
return(
    <>
    {/* <SidebarTrigger className="fixed mt-32"/> */}
    <NavCard/>
    <Search/>
    <Places/>
    </>

)
}