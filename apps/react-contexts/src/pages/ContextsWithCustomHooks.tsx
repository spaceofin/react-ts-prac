import {
  ColorBall1,
  ColorBall2,
  ColorBall3,
  ColorBall4,
} from "../components/ColorBall";
import {
  Color1Provider,
  Color2Provider,
  Color3Provider,
  Color4Provider,
} from "../contexts/colorContexts";

export default function ContextsWithCustomHooks() {
  return (
    <div className="flex flex-col p-10 gap-10">
      <h1 className="text-2xl font-bold text-slate-800">
        Color Contexts Example
      </h1>
      <div className="p-4 flex gap-4">
        <Color1Provider>
          <Color2Provider>
            <Color3Provider>
              <Color4Provider>
                <ColorBall1 />
                <ColorBall2 />
                <ColorBall3 />
                <ColorBall4 />
              </Color4Provider>
            </Color3Provider>
          </Color2Provider>
        </Color1Provider>
      </div>
    </div>
  );
}
