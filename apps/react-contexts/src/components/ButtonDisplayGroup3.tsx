import { useContext, useRef } from "react";
import {
  ToggleButton4Context,
  ToggleButton5Context,
  ToggleButton6Context,
  ToggleButtonType,
  ToggleDispatchContext,
} from "../contexts/toggleButtonContexts";
import ToggleButtonsProvider from "./ToggleButtonsProvider";

const ToggleButtonContexts = {
  4: ToggleButton4Context,
  5: ToggleButton5Context,
  6: ToggleButton6Context,
} as const;

const ButtonDisplay = ({ number }: { number: ToggleButtonType }) => {
  const button = useContext(ToggleButtonContexts[number]);
  const dispatch = useContext(ToggleDispatchContext);
  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    <div className="flex flex-col items-center gap-1">
      <button
        onClick={() => dispatch({ type: number })}
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

export default function ButtonDisplayGroup3() {
  return (
    <div className="flex gap-6">
      <ToggleButtonsProvider>
        <ButtonDisplay number={4} />
        <ButtonDisplay number={5} />
        <ButtonDisplay number={6} />
      </ToggleButtonsProvider>
    </div>
  );
}
