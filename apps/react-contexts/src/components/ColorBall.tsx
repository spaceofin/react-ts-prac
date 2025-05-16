import { useRef } from "react";
import {
  Colors,
  useColor1,
  useColor2,
  useColor3,
  useColor4,
} from "../contexts/colorContexts";

export const ColorBall1 = () => {
  const [color1, setColor1] = useColor1();
  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    <div className="flex flex-col items-center gap-1">
      <button
        onClick={() =>
          setColor1((prev) =>
            prev === Colors.LightCoral ? Colors.Khaki : Colors.LightCoral
          )
        }
        style={{ background: color1 }}
        className="w-24 h-24 rounded-full flex justify-center items-end pb-4 hover:cursor-pointer"></button>
      <div className="text-sm">rerenderCount {renderCount.current}</div>
    </div>
  );
};

export const ColorBall2 = () => {
  const [color2, setColor2] = useColor2();
  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    <div className="flex flex-col items-center gap-1">
      <button
        onClick={() =>
          setColor2((prev) =>
            prev === Colors.Khaki ? Colors.LightBlue : Colors.Khaki
          )
        }
        style={{ background: color2 }}
        className="w-24 h-24 rounded-full flex justify-center items-end pb-4 hover:cursor-pointer"></button>
      <div className="text-sm">rerenderCount {renderCount.current}</div>
    </div>
  );
};

export const ColorBall3 = () => {
  const [color3, setColor3] = useColor3();
  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    <div className="flex flex-col items-center gap-1">
      <button
        onClick={() =>
          setColor3((prev) =>
            prev === Colors.LightBlue ? Colors.LightGreen : Colors.LightBlue
          )
        }
        style={{ background: color3 }}
        className="w-24 h-24 rounded-full flex justify-center items-end pb-4 hover:cursor-pointer"></button>
      <div className="text-sm">rerenderCount {renderCount.current}</div>
    </div>
  );
};

export const ColorBall4 = () => {
  const [color4, setColor4] = useColor4();
  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    <div className="flex flex-col items-center gap-1">
      <button
        onClick={() =>
          setColor4((prev) =>
            prev === Colors.LightGreen ? Colors.LightCoral : Colors.LightGreen
          )
        }
        style={{ background: color4 }}
        className="w-24 h-24 rounded-full flex justify-center items-end pb-4 hover:cursor-pointer"></button>
      <div className="text-sm">rerenderCount {renderCount.current}</div>
    </div>
  );
};
