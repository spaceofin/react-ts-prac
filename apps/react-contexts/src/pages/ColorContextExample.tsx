import ColorBox from "../components/ColorBox";
import { ColorContext } from "../contexts/colorContext";
import ButtonDisplayGroup from "../components/ButtonDisplayGroup";
import ButtonDisplayGroup2 from "../components/ButtonDisplayGroup2";

export default function ColorContextExample() {
  return (
    <div className="flex flex-col p-10 gap-10">
      <div>
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
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-bold text-slate-800">
          Toggle Buttons Example
        </h1>
        <div className="px-2">
          <ButtonDisplayGroup />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-bold text-slate-800">
          Toggle Buttons Example2
        </h1>
        <div className="px-2">
          <ButtonDisplayGroup2 />
        </div>
      </div>
    </div>
  );
}
