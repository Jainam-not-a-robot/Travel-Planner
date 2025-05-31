'use client'
import { ReactNode, useEffect, useState } from "react";
import { createContext,useContext } from "react";
type UserContextType = {
  selectedPlace: string;
  setSelectedPlace: (place: string) => void;
};
export const UserContext=createContext<UserContextType | undefined>(undefined);;

export function UserProvider({children}:{children:ReactNode}){
    const [selectedPlace,setSelectedPlace]=useState("");
    return(
      <UserContext.Provider value={{selectedPlace,setSelectedPlace}}>{children}</UserContext.Provider>
      
    )
  }
