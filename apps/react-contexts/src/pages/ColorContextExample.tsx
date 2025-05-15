import ColorBox from "../components/ColorBox";
import { ColorContext } from "../contexts/colorContext";

export default function ColorContextExample() {
  return (
    <div className="flex flex-col p-10 gap-10">
      <h1 className="text-2xl font-bold text-slate-800">
        Color Context Example
      </h1>
      <div className="p-4 flex gap-4">
        <ColorBox />
        <ColorContext.Provider value="skyblue">
          <ColorBox />
        </ColorContext.Provider>
        <ColorContext.Provider value="lightpink">
          <ColorBox />
        </ColorContext.Provider>
        <ColorContext.Provider value="lightgreen">
          <ColorBox />
        </ColorContext.Provider>
      </div>
    </div>
  );
}
