import React from "react";
import { Pokemon } from "../types/pokemon";

export function PokemonList({ pokemons }: { pokemons: Pokemon[] }) {
  console.log("PokemonList rendered.");
  return (
    <div className="grid grid-cols-5 gap-x-2 gap-y-1 ">
      {pokemons.map((pokemon) => (
        <div
          key={pokemon.name}
          className="text-center px-4 text-lg py-1 bg-red-100 rounded-lg border-2 border-gray-500">
          {pokemon.name}
        </div>
      ))}
    </div>
  );
}

export const MemoizedPokemonList = React.memo(function PokemonList({
  pokemons,
}: {
  pokemons: Pokemon[];
}) {
  console.log("MemoizedPokemonList rendered.");
  return (
    <div>
      {pokemons.map((pokemon) => (
        <div key={pokemon.name}>{pokemon.name}</div>
      ))}
    </div>
  );
});
