import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import { Image } from "react-native";

export default function PokemonDetail({ pokemon }) {
  return (
    <ScrollView
      style={{ ...StyleSheet.absoluteFillObject }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Types</Text>
        <View style={{ flexDirection: "row" }}>
          {pokemon.types?.map(({ type }) => (
            <Text key={type.name} style={styles.typesText}>
              # {type.name}
            </Text>
          ))}
        </View>
        <Text style={styles.title}>Sprites</Text>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Image
            source={{ uri: pokemon.sprites.front_default }}
            style={styles.miniPicture}
          />
          <Image
            source={{ uri: pokemon.sprites.back_default }}
            style={styles.miniPicture}
          />
          <Image
            source={{ uri: pokemon.sprites.front_shiny }}
            style={styles.miniPicture}
          />
          <Image
            source={{ uri: pokemon.sprites.back_shiny }}
            style={styles.miniPicture}
          />
        </ScrollView>

        <Text style={styles.title}>Peso</Text>
        <Text style={styles.typesText}>{pokemon.weight}</Text>

        <View>
          <Text style={styles.title}>Habilidades</Text>
          {pokemon.abilities.map(({ ability }) => (
            <Text key={ability.name} style={styles.typesText}>
              # {ability.name}
            </Text>
          ))}
        </View>

        <View>
          <Text style={styles.title}>Movimientos</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {pokemon.moves.map(({ move }) => (
              <Text key={move.name} style={styles.typesText}>
                # {move.name}
              </Text>
            ))}
          </View>
        </View>
        <View style={{ marginBottom: 70 }}>
          <Text style={styles.title}>Stats</Text>
          <View>
            {pokemon.stats.map(({ stat, base_stat }, i) => {
              return (
                <View key={stat.name + i} style={{ flexDirection: "row" }}>
                  <Text style={{ ...styles.typesText, width: 150 }}>
                    {stat.name}
                  </Text>
                  <Text style={{ ...styles.typesText, fontWeight: "bold" }}>
                    {base_stat}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 380,
  },
  title: {
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 20,
  },
  typesText: {
    marginRight: 10,
    fontSize: 20,
  },
  miniPicture: {
    width: 90,
    height: 90,
  },
});
