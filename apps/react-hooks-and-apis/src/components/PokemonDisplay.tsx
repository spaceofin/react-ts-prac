import { useEffect, useState } from "react";
import { fetchPokemons } from "../lib/fetchPokemons";
import { Pokemon } from "../types/pokemon";
import { PokemonList } from "./PokemonList";

export default function PokemonDisplay() {
  const [pokemons, setPokemons] = useState<Pokemon[] | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemons();
      setPokemons(data);
    };
    fetchData();
  }, []);

  return <PokemonList pokemons={pokemons} />;
}
