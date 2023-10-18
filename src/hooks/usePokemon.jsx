import axios from "axios";
import { useEffect, useState } from "react";

export const usePokemon = (id) => {
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const loadPokemon = async () => {
    const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setPokemon(resp.data);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPokemon();
  }, []);

  return { pokemon, isLoading };
};
