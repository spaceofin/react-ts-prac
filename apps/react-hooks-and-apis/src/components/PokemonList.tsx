import React from "react";
import { Pokemon } from "../types/pokemon";

export function PokemonList({
  pokemons,
  rerenderCount,
  incrementRenderCount,
}: {
  pokemons: Pokemon[];
  rerenderCount: React.RefObject<number>;
  incrementRenderCount?: () => void;
}) {
  rerenderCount.current += 1;
  console.log("PokemonList rendered.");
  return (
    <>
      {incrementRenderCount ? (
        <div className="flex justify-start">
          <button
            className="bg-orange-300/80 rounded-md px-4 my-2 text-lg border-4 border-orange-300 cursor-pointer"
            onClick={incrementRenderCount}>
            Click - Rerender Page
          </button>
        </div>
      ) : null}
      <div className="grid grid-cols-[repeat(auto-fit,300px)] gap-x-2 gap-y-1 ">
        {pokemons.map((pokemon) => (
          <div
            key={pokemon.name}
            className="text-center px-4 text-lg py-1 bg-red-100 rounded-lg border-2 border-gray-500">
            {pokemon.name}
          </div>
        ))}
      </div>
    </>
  );
}

export const MemoizedPokemonList = React.memo(function PokemonList({
  pokemons,
  rerenderCount,
}: {
  pokemons: Pokemon[];
  rerenderCount: React.RefObject<number>;
}) {
  rerenderCount.current += 1;
  console.log("MemoizedPokemonList rendered.");
  return (
    <div className="grid grid-cols-[repeat(auto-fit,300px)] gap-x-2 gap-y-1 ">
      {pokemons.map((pokemon) => (
        <div
          key={pokemon.name}
          className="text-center px-4 text-lg py-1 bg-red-100 rounded-lg border-2 border-gray-500">
          {pokemon.name}
        </div>
      ))}
    </div>
  );
});
