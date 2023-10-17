import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function PokemonScreen({ route, navigation }) {
  const { pokemonSelected } = route.params;
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ top: top }}>
      <Text>PokemonScreen</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Regresar</Text>
      </TouchableOpacity>
    </View>
  );
}
