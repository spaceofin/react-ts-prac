import ButtonDisplayGroup from "../components/ButtonDisplayGroup";
import ButtonDisplayGroup2 from "../components/ButtonDisplayGroup2";
import ButtonDisplayGroup3 from "../components/ButtonDisplayGroup3";

export default function ToggleButtonContextsExample() {
  return (
    <div className="flex flex-col p-10 gap-10">
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
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-bold text-slate-800">
          Toggle Buttons Example3
        </h1>
        <div className="px-2">
          <ButtonDisplayGroup3 />
        </div>
      </div>
    </div>
  );
}
