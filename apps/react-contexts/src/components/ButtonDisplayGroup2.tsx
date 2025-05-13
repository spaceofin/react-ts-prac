import { Dispatch, SetStateAction, useContext, useRef } from "react";
import {
  ToggleButton1Context,
  ToggleButton2Context,
  ToggleButton3Context,
} from "../contexts/toggleButtonContexts";
import ToggleButtonProvider from "./ToggleButtonProvider";

interface ButtonDisplayProps {
  context: React.Context<[boolean, Dispatch<SetStateAction<boolean>>]>;
}

const ButtonDisplay = ({ context }: ButtonDisplayProps) => {
  const [button, setButton] = useContext(context);
  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    <div className="flex flex-col items-center gap-1">
      <button
        onClick={() => setButton((prev) => !prev)}
        className="border-1 rounded-sm w-20 h-8 flex items-center justify-center cursor-pointer">
        toggle
      </button>
      <div
        style={{ background: button ? "#B5E61D" : "#ddd" }}
        className="w-24 h-24 rounded-md flex justify-center items-end pb-4 hover:cursor-pointer">
        {button ? "ON" : "OFF"}
      </div>
      <div className="text-sm">rerenderCount {renderCount.current}</div>
    </div>
  );
};

export default function ButtonDisplayGroup2() {
  return (
    <div className="flex gap-6">
      <ToggleButtonProvider context={ToggleButton1Context}>
        <ToggleButtonProvider context={ToggleButton2Context}>
          <ToggleButtonProvider context={ToggleButton3Context}>
            <ButtonDisplay context={ToggleButton1Context} />
            <ButtonDisplay context={ToggleButton2Context} />
            <ButtonDisplay context={ToggleButton3Context} />
          </ToggleButtonProvider>
        </ToggleButtonProvider>
      </ToggleButtonProvider>
    </div>
  );
}
