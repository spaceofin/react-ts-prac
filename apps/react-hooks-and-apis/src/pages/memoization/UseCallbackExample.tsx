import { useCallback, useState } from "react";
import { MemoizedPokemonListDisplay } from "../../components/PokemonDisplay";

export default function UseCallbackExample() {
  const [count, setCount] = useState(0);

  const incrementRenderCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div className="p-10">
      <div>
        <button
          className="px-4 py-2 rounded-md my-4 font-bold text-xl bg-yellow-300/70 cursor-pointer"
          onClick={() => setCount((prev) => prev + 1)}>
          Click - Rerender Page
        </button>
        <span className="py-2 px-3 ml-2 rounded-md my-4 font-bold text-xl bg-gray-300/70 ">
          Page Rerender Count: {count}
        </span>
      </div>

      <div className="flex w-full">
        <MemoizedPokemonListDisplay
          incrementRenderCount={() => {
            setCount((prev) => prev + 1);
          }}
        />
        <MemoizedPokemonListDisplay
          incrementRenderCount={incrementRenderCount}
          isIncrementRenderCountMemoized={true}
        />
      </div>
    </div>
  );
}
