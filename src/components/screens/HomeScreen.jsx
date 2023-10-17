import React from "react";
import { usePokemonPaginate } from "../../hooks/usePokemonPaginate";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import PokemonCard from "../common/PokemonCard";

export default function HomeScreen() {
  const { pokemonList, loadPokemons } = usePokemonPaginate();

  return (
    <>
      <Image
        source={require("../../assets/pokebola.png")}
        style={styles.bgPokeball}
      />
      {pokemonList.length > 0 && (
        <View style={styles.containerList}>
          <FlatList
            data={pokemonList}
            numColumns={2}
            keyExtractor={(pokemon) => String(pokemon.id)}
            renderItem={({ item }) => <PokemonCard pokemon={item} />}
            ListHeaderComponent={<Text style={styles.title}>Pokedex</Text>}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={
              <ActivityIndicator style={{ height: 200 }} size={50} />
            }
            onEndReached={loadPokemons}
            onEndReachedThreshold={0.3}
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  bgPokeball: {
    width: 300,
    height: 300,
    position: "absolute",
    top: -130,
    right: -130,
    marginHorizontal: 20,
    opacity: 0.2,
  },
  containerList: {
    alignItems: "center",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginHorizontal: 20,
  },
});
