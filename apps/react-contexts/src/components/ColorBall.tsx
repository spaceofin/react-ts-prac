import { useRef, useState } from "react";

export const ColorBall = () => {
  const [color, setColor] = useState("lightcoral");
  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    <div className="flex flex-col items-center gap-1">
      <button
        onClick={() => setColor("khaki")}
        style={{ background: color }}
        className="w-24 h-24 rounded-full flex justify-center items-end pb-4 hover:cursor-pointer"></button>
      <div className="text-sm">rerenderCount {renderCount.current}</div>
    </div>
  );
};
