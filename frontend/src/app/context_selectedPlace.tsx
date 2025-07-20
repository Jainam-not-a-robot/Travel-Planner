'use client'
import { ReactNode, useState, createContext } from "react";

type OptionType = {
  value: string;
  label: string;
};

type UserContextType = {
  selectedPlace: string;
  setSelectedPlace: (place: string) => void;
  selectedOption: OptionType | null;
  setSelectedOption: (option: OptionType | null) => void;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [selectedPlace, setSelectedPlace] = useState("");
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  return (
    <UserContext.Provider value={{ selectedPlace, setSelectedPlace, selectedOption, setSelectedOption }}>
      {children}
    </UserContext.Provider>
  );
}
