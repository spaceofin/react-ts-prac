import { useContext, useRef } from "react";
import { ToggleButtonsContext } from "../contexts/toggleButtonsContext";

export default function ButtonDisplay({
  buttonName,
}: {
  buttonName: "button1" | "button2" | "button3";
}) {
  const { button1, button2, button3 } = useContext(ToggleButtonsContext);
  const renderCount = useRef(0);

  const buttonState = { button1, button2, button3 }[buttonName];

  renderCount.current += 1;

  return (
    <>
      <div
        style={{ background: buttonState ? "#B5E61D" : "#ddd" }}
        className="w-24 h-24 rounded-md flex justify-center items-end pb-4 hover:cursor-pointer">
        {buttonState ? "ON" : "OFF"}
      </div>
      <div className="text-sm">rerenderCount {renderCount.current}</div>
    </>
  );
}
