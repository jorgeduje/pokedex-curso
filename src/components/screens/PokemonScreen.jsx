import { View, Text } from "react-native";
import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { usePokemon } from "../../hooks/usePokemon";
import { StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "react-native";
import PokemonDetail from "../common/PokemonDetail";
import { ActivityIndicator } from "react-native";
import { FavoritesContext } from "../../context/FavoritesContext";

export default function PokemonScreen({ route, navigation }) {
  const { top } = useSafeAreaInsets();
  const { pokemonSelected } = route.params;

  const { pokemon, isLoading } = usePokemon(pokemonSelected.id);

  const { handleFavorites, favorites } = useContext(FavoritesContext);
  const isInFavorites = favorites.some(
    (elemento) => elemento.id === pokemonSelected.id
  );
  return (
    <View style={{ flex: 1 }}>
      {/* ACA VA EL HEADER  */}
      <View
        style={{ ...styles.container, backgroundColor: pokemonSelected.color }}
      >
        <TouchableOpacity
          style={{ ...styles.backButton, top: top + 5 }}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" color={"white"} size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.favoriteIcon, top: top + 5 }}
          onPress={() => handleFavorites(pokemonSelected)}
        >
          <AntDesign
            name="heart"
            color={isInFavorites ? "red" : "white"}
            size={30}
          />
        </TouchableOpacity>

        <Text style={{ ...styles.title, top: top + 35 }}>
          {pokemonSelected.name + "\n"} # {pokemonSelected.id}
        </Text>

        <Image
          style={styles.pokeball}
          source={require("../../assets/pokebola-blanca.png")}
        />
        <Image
          style={styles.picture}
          source={{ uri: pokemonSelected.picture }}
        />
      </View>

      {/* EL DETALLE DEL POKEMON  */}
      {isLoading ? (
        <ActivityIndicator size={50} />
      ) : (
        <PokemonDetail pokemon={pokemon} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 370,
    zIndex: 999,
    alignItems: "center",
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
  },
  backButton: {
    position: "absolute",
    left: 20,
  },
  favoriteIcon: {
    position: "absolute",
    right: 20,
  },
  title: {
    color: "white",
    fontSize: 40,
    alignSelf: "flex-start",
    left: 20,
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: -20,
    opacity: 0.7,
  },
  picture: {
    width: 250,
    height: 250,
    position: "absolute",
    bottom: -30,
  },
});
