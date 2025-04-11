import { useState } from "react";
import CatchedPokemonDisplay from "../../components/CatchedPokemonDisplay";

export default function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [sortCount, setSortCount] = useState(0);

  return (
    <div className="p-10">
      <div className="flex gap-2">
        <button
          className="px-4 py-2 rounded-md my-4 font-bold text-xl bg-yellow-300/70 cursor-pointer"
          onClick={() => setCount((prev) => prev + 1)}>
          Click - Catch New Pokemon
        </button>
        <button
          className="px-4 py-2 rounded-md my-4 font-bold text-xl bg-rose-400/70 cursor-pointer"
          onClick={() => setSortCount((prev) => prev + 1)}>
          Click - Sort & Save
        </button>
      </div>
      <div className="flex w-full">
        <CatchedPokemonDisplay count={count} sortCount={sortCount} />
      </div>
    </div>
  );
}
