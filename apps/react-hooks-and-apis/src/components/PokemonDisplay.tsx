import React, { useEffect, useRef, useState } from "react";
import { fetchPokemons } from "../lib/fetchPokemons";
import { Pokemon } from "../types/pokemon";
import { MemoizedPokemonList, PokemonList } from "./PokemonList";

export function PokemonListDisplay({
  count,
  useMemoized = false,
}: {
  count?: number;
  useMemoized?: boolean;
}) {
  const [pokemons, setPokemons] = useState<Pokemon[] | null>(null);
  const normalComponentRerenderCount = useRef(0);
  const memoizedComponentRerenderCount = useRef(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemons();
      setPokemons(data);
    };
    fetchData();
  }, []);

  if (!pokemons) {
    return <div className="mt-10 ml-5 w-full text-2xl">Loading...</div>;
  }

  return useMemoized ? (
    <div className="flex flex-col w-full">
      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-bold mb-2 pl-2">Memoized Pokemon List</h1>
        <span className="text-lg">
          Rerender count: {normalComponentRerenderCount.current}
        </span>
      </div>
      <MemoizedPokemonList
        pokemons={pokemons}
        rerenderCount={normalComponentRerenderCount}
      />
    </div>
  ) : (
    <div className="flex flex-col w-full">
      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-bold mb-2 pl-2">Pokemon List</h1>
        <span className="text-lg">
          Rerender count: {memoizedComponentRerenderCount.current}
        </span>
      </div>
      <PokemonList
        pokemons={pokemons}
        rerenderCount={memoizedComponentRerenderCount}
      />
    </div>
  );
}

export const MemoizedPokemonListDisplay = React.memo(
  ({
    incrementRenderCount,
    isIncrementRenderCountMemoized = false,
  }: {
    incrementRenderCount?: () => void;
    isIncrementRenderCountMemoized?: boolean;
  }) => {
    const [pokemons, setPokemons] = useState<Pokemon[] | null>(null);
    const normalComponentRerenderCount = useRef(0);

    useEffect(() => {
      const fetchData = async () => {
        const data = await fetchPokemons();
        setPokemons(data);
      };
      fetchData();
    }, []);

    if (!pokemons) {
      return <div className="mt-10 ml-5 w-full text-2xl">Loading...</div>;
    }

    return (
      <div className="flex flex-col w-full">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold mb-2 pl-2">
            {isIncrementRenderCountMemoized
              ? "Pokemon List (Click with useCallback)"
              : "Pokemon List"}
          </h1>
          <span className="text-lg">
            Rerender count: {normalComponentRerenderCount.current}
          </span>
        </div>
        <PokemonList
          pokemons={pokemons}
          rerenderCount={normalComponentRerenderCount}
          incrementRenderCount={incrementRenderCount}
        />
      </div>
    );
  }
);
