export async function fetchPokemons() {
  const api_url = "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0";
  const pokemons = await fetch(api_url)
    .then((res) => res.json())
    .then((data) => data.results);
  return pokemons;
}
