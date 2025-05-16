import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

export enum Colors {
  LightCoral = "lightcoral",
  Khaki = "khaki",
  LightBlue = "lightblue",
  LightGreen = "lightgreen",
}

type ColorContextType = [Colors, Dispatch<SetStateAction<Colors>>];

const Color1Context = createContext<ColorContextType | null>(null);
const Color2Context = createContext<ColorContextType | null>(null);
const Color3Context = createContext<ColorContextType | null>(null);
const Color4Context = createContext<ColorContextType | null>(null);

export const Color1Provider = ({ children }: { children: ReactNode }) => {
  const [color1, setColor1] = useState(Colors.LightCoral);
  return (
    <Color1Context.Provider value={[color1, setColor1]}>
      {children}
    </Color1Context.Provider>
  );
};

export const Color2Provider = ({ children }: { children: ReactNode }) => {
  const [color2, setColor2] = useState(Colors.Khaki);
  return (
    <Color2Context.Provider value={[color2, setColor2]}>
      {children}
    </Color2Context.Provider>
  );
};

export const Color3Provider = ({ children }: { children: ReactNode }) => {
  const [color3, setColor3] = useState(Colors.LightBlue);
  return (
    <Color3Context.Provider value={[color3, setColor3]}>
      {children}
    </Color3Context.Provider>
  );
};

export const Color4Provider = ({ children }: { children: ReactNode }) => {
  const [color4, setColor4] = useState(Colors.LightGreen);
  return (
    <Color4Context.Provider value={[color4, setColor4]}>
      {children}
    </Color4Context.Provider>
  );
};

export const useColor1 = () => {
  const color = useContext(Color1Context);
  if (color === null) throw new Error("Context provider not found.");
  return color;
};

export const useColor2 = () => {
  const color = useContext(Color2Context);
  if (color === null) throw new Error("Context provider not found.");
  return color;
};

export const useColor3 = () => {
  const color = useContext(Color3Context);
  if (color === null) throw new Error("Context provider not found.");
  return color;
};

export const useColor4 = () => {
  const color = useContext(Color4Context);
  if (color === null) throw new Error("Context provider not found.");
  return color;
};
