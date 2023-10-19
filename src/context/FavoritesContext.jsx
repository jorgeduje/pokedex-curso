import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavoritesContext = createContext();

export const FavoritesContextComponent = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("favorites");
        const favoritesArr = jsonValue != null ? JSON.parse(jsonValue) : [];
        setFavorites(favoritesArr);
      } catch (error) {
        throw error;
      }
    };

    getData();
  }, []);

  const handleFavorites = (pokemon) => {
    const exist = favorites.some((elemento) => elemento.id === pokemon.id);
    if (exist) {
      // QUITAR
      const newArr = favorites.filter((elemento) => elemento.id !== pokemon.id);
      setFavorites(newArr);
      storeData(newArr);
    } else {
      //AGREGO
      setFavorites([...favorites, pokemon]);
      storeData([...favorites, pokemon]);
    }
  };

  const storeData = async (value) => {
    try {
      let jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("favorites", jsonValue);
    } catch (error) {
      throw error;
    }
  };

  let data = { favorites, handleFavorites };
  return (
    <FavoritesContext.Provider value={data}>
      {children}
    </FavoritesContext.Provider>
  );
};
