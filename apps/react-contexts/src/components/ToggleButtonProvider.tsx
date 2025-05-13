import { useState } from "react";

type ToggleButtonProviderProps = {
  context: React.Context<
    [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  >;
  children: React.ReactNode;
};

export default function ToggleButtonProvider({
  context,
  children,
}: ToggleButtonProviderProps) {
  const [button, setButton] = useState(false);
  return (
    <context.Provider value={[button, setButton]}>{children}</context.Provider>
  );
}
