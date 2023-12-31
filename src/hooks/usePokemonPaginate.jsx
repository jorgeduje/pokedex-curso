import axios from "axios";
import { useEffect, useState } from "react";

export const usePokemonPaginate = () => {
  const POKEMON_TYPE_COLORS = {
    normal: "#A8A878",
    fighting: "#C03028",
    flying: "#A890F0",
    poison: "#A040A0",
    ground: "#E0C068",
    rock: "#B8A038",
    bug: "#A8B820",
    ghost: "#705898",
    steel: "#B8B8D0",
    fire: "#FA6C6C",
    water: "#6890F0",
    grass: "#48CFB2",
    electric: "#FFCE4B",
    psychic: "#F85888",
    ice: "#98D8D8",
    dragon: "#7038F8",
    dark: "#705848",
    fairy: "#EE99AC",
  };
  const [pokemonList, setPokemonList] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=10"
  );

  const loadPokemons = async () => {
    const res = await axios.get(nextPageUrl);
    setNextPageUrl(res.data.next);
    mapPokemons(res.data.results);
  };

  const pokemonDetailByUrlApi = async (url) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const mapPokemons = async (pokemons) => {
    const newPokemonList = [];
    for await (const pokemon of pokemons) {
      const pokemonDetail = await pokemonDetailByUrlApi(pokemon.url);
      newPokemonList.push({
        id: pokemonDetail.id,
        name: pokemonDetail.name,
        type: pokemonDetail.types[0].type.name,
        picture: pokemonDetail.sprites.other["official-artwork"].front_default,
        color:
          POKEMON_TYPE_COLORS[pokemonDetail.types[0].type.name.toLowerCase()],
      });
    }

    setPokemonList((prev) => [...prev, ...newPokemonList]);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return { pokemonList, loadPokemons };
};
