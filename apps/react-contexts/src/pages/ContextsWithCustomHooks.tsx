import { ColorBall } from "../components/ColorBall";

export default function ContextsWithCustomHooks() {
  return (
    <div className="flex flex-col p-10 gap-10">
      <h1 className="text-2xl font-bold text-slate-800">
        Color Contexts Example
      </h1>
      <div className="p-4 flex gap-4">
        <ColorBall />
        <ColorBall />
        <ColorBall />
        <ColorBall />
      </div>
    </div>
  );
}
