import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/components/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { StackNavigator } from "./src/router/StackNavigator";
import { TabNavigator } from "./src/router/TabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
