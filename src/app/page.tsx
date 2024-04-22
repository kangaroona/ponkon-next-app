import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
// import Providers from "./provider";
export default async function Home() {
  const fetchPokemon = async (pokemonNumber: any) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`).then((res) => res.json());
    return res; // Return the Pokémon data
  };
  const fetchPokemonArray = async () => {
    const pokemonArray = [];
    for (let i = 1; i <= 30; i++) {
      try {
        const pokemonData = await fetchPokemon(i);
        pokemonArray.push(pokemonData);
      } catch (error) {
        console.error(error);
      }
    }
    return pokemonArray;
  };

  const pokemon = await fetchPokemonArray();
  console.log({ pokemon });
  return (
    <main>
      <h1 style={{ textAlign: "center", margin: "4rem" }}>Pokedex</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          alignItems: "center",
          justifyContent: "center",
          justifySelf: "center",
        }}
      >
        {pokemon?.map((itm, index) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
            key={index}
          >
            <img alt={itm?.name} src={itm?.sprites?.front_default} />
            <div>{itm?.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
