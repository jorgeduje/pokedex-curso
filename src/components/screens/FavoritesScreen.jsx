import { View, Text } from "react-native";
import React, { useContext } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FavoritesContext } from "../../context/FavoritesContext";
import { FlatList } from "react-native";
import PokemonCard from "../common/PokemonCard";

export default function FavoritesScreen() {
  const { top } = useSafeAreaInsets();
  const { favorites } = useContext(FavoritesContext);

  return (
    <View style={{ top: top, alignItems: "center" }}>
      <FlatList
        data={favorites}
        numColumns={2}
        keyExtractor={(pokemon) => String(pokemon.id)}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <Text
            style={{
              top: top,
              marginBottom: 30,
              paddingBottom: 10,
              fontSize: 35,
              fontWeight: "bold",
              marginHorizontal: 20,
            }}
          >
            Favoritos
          </Text>
        }
      />
    </View>
  );
}
