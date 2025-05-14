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

export const ToggleButton4Context = createContext<boolean>(false);
export const ToggleButton5Context = createContext<boolean>(false);
export const ToggleButton6Context = createContext<boolean>(false);
export type ToggleButtonType = 4 | 5 | 6;
export type Action = { type: ToggleButtonType };
export const ToggleDispatchContext = createContext<Dispatch<Action>>(() => {});
