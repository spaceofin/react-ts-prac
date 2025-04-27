import { useContext } from "react";
import { ColorContext } from "../contexts/colorContext";

export default function ColorBox() {
  const color = useContext(ColorContext);
  return (
    <div
      style={{ background: color }}
      className="w-24 h-24 rounded-md flex justify-center items-end pb-4">
      {color}
    </div>
  );
}
