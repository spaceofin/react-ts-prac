import { useState } from "react";
import { ToggleButtonsContext } from "../contexts/toggleButtonsContext";
import ButtonDisplay from "./ButtonDisplay";

export default function ButtonDisplayGroup() {
  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);

  return (
    <div className="flex gap-6">
      <ToggleButtonsContext value={{ button1, button2, button3 }}>
        <div className="flex flex-col items-center gap-1">
          <button
            onClick={() => setButton1((prev) => !prev)}
            className="border-1 rounded-sm w-20 h-8 flex items-center justify-center cursor-pointer">
            toggle
          </button>
          <ButtonDisplay buttonName="button1" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <button
            onClick={() => setButton2((prev) => !prev)}
            className="border-1 rounded-sm w-20 h-8 flex items-center justify-center cursor-pointer">
            toggle
          </button>
          <ButtonDisplay buttonName="button2" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <button
            onClick={() => setButton3((prev) => !prev)}
            className="border-1 rounded-sm w-20 h-8 flex items-center justify-center cursor-pointer">
            toggle
          </button>
          <ButtonDisplay buttonName="button3" />
        </div>
      </ToggleButtonsContext>
    </div>
  );
}
