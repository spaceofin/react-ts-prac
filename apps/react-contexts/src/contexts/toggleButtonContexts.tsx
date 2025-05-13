import { createContext, Dispatch, SetStateAction } from "react";

type toggleButtonContextType = [boolean, Dispatch<SetStateAction<boolean>>];

export const ToggleButton1Context = createContext<toggleButtonContextType>([
  false,
  () => {},
]);
export const ToggleButton2Context = createContext<toggleButtonContextType>([
  false,
  () => {},
]);
export const ToggleButton3Context = createContext<toggleButtonContextType>([
  false,
  () => {},
]);
