import { useEffect, useMemo, useState } from "react";
import { fetchPokemons } from "../lib/fetchPokemons";
import { Pokemon } from "../types/pokemon";

export default function CatchedPokemonDisplay({
  count,
  sortCount,
}: {
  count: number;
  sortCount: number;
}) {
  const [pokemons, setPokemons] = useState<string[]>([]);
  const [caughtPokemons, setCaughtPokemons] = useState<string[]>([]);

  const sortedCaughtPokemons = useMemo(() => {
    return [...caughtPokemons].sort();
  }, [sortCount]);

  useEffect(() => {
    const fetchData = async () => {
      const data: Pokemon[] = await fetchPokemons();
      const pokemons = data.map((pokemon) => pokemon.name);
      setPokemons(pokemons);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (pokemons.length > 0) {
      const randomIndex = Math.floor(Math.random() * pokemons.length);
      setCaughtPokemons((prev) => [...prev, pokemons[randomIndex]]);
    }
  }, [count]);

  return (
    <div className="flex w-full">
      <div className="flex flex-col w-full">
        <h1 className="text-3xl font-bold mb-2 pl-2">Catched Pokemon List</h1>
        <div className="grid grid-cols-[repeat(auto-fit,300px)] gap-x-2 gap-y-1 ">
          {caughtPokemons.map((pokemon, index) => (
            <div
              key={index}
              className="text-center px-4 text-lg py-1 bg-red-100 rounded-lg border-2 border-gray-500">
              {pokemon}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full">
        <h1 className="text-3xl font-bold mb-2 pl-2">
          Sorted & Saved Pokemon List
        </h1>
        <div className="grid grid-cols-[repeat(auto-fit,300px)] gap-x-2 gap-y-1 ">
          {sortedCaughtPokemons.map((pokemon, index) => (
            <div
              key={index}
              className="text-center px-4 text-lg py-1 bg-pink-100 rounded-lg border-2 border-gray-500">
              {pokemon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
