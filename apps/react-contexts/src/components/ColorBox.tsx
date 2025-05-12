import { useContext, useRef } from "react";
import { ColorContext } from "../contexts/colorContext";

export default function ColorBox() {
  const color = useContext(ColorContext);
  const renderCount = useRef(0);

  renderCount.current += 1;

  return (
    <div
      style={{ background: color }}
      className="w-24 h-24 rounded-md flex justify-center items-end pb-4">
      <div className="flex flex-col items-center justify-center">
        <span className="text-xs">renderCount {renderCount.current}</span>
        <span>{color}</span>
      </div>
    </div>
  );
}
