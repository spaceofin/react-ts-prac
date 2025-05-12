import { createContext } from "react";

interface toggleButtonsContextType {
  button1: boolean;
  button2: boolean;
  button3: boolean;
}

export const ToggleButtonsContext = createContext<toggleButtonsContextType>({
  button1: false,
  button2: false,
  button3: false,
});
