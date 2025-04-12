import { useState } from "react";
import { PokemonListDisplay } from "../../components/PokemonDisplay";

export default function ReactMemoExample() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-10">
      <div>
        <button
          className="px-4 py-2 rounded-md my-4 font-bold text-xl bg-yellow-300/70 cursor-pointer"
          onClick={() => setCount((prev) => prev + 1)}>
          Click - Rerender Pokemon Display
        </button>
        <span className="py-2 px-3 ml-2 rounded-md my-4 font-bold text-xl bg-gray-300/70 ">
          App Rerender Count: {count}
        </span>
      </div>
      <div className="flex w-full">
        <PokemonListDisplay count={count} />
        <PokemonListDisplay count={count} useMemoized={true} />
      </div>
    </div>
  );
}
