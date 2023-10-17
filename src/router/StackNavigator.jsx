import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../components/screens/HomeScreen";
import PokemonScreen from "../components/screens/PokemonScreen";

const Stack = createStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: "white",
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
    </Stack.Navigator>
  );
}
