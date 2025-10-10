'use client'
import CardNav from "@/components/CardNav"
// import logo from "@/assets/logo.png"
import travellogo from "@/assets/travel-logo.png"
export default function NavCard(){
    const items = [
    {
      label: "Home",
      bgColor: "#0D0716",
      textColor: "#fff",
      links:[
        {label:"Navigate", ariaLabel:"Home", href:"/"}
      ],
      
    },
    {
      label: "Places",
      bgColor: "#0D0716",
      textColor: "#fff",
      links:[
        {label:"Navigate", ariaLabel:"Places", href:"/places"}
      ],
      
    }
  ]
    return(
        <CardNav 
            logo={travellogo}
            logoAlt="Travel Planner"
            items={items}
            baseColor="white"
            menuColor="black"
            buttonBgColor="#239BA7"
            buttonTextColor="#fff"
            ease="power3.out"/>
    )
}