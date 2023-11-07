import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";
import Details from "./pages/Details";
import Profit from "./pages/Profit";

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <Profit/>
      {/* <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Details"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Profit" component={Profit} />
        </Stack.Navigator>
      </NavigationContainer> */}
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});