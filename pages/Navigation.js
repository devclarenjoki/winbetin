import * as React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Details from "./Details";
import Profit from "./Profit";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    // <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Details"
        >
          <Stack.Screen
            name="Profit"
            component={Profit}
            // options={{ title: "Dashboard" }}
          />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    // </PaperProvider>
  );
};

{
  /* // <Stack.Navigator
    //   initialRouteName="Login"
    //   screenOptions={{
    //     headerShown: false,
    //   }}>
    //   <Stack.Screen name="Home" component={HomeScreen} />
    //   <Stack.Screen name="Login" component={LoginScreen} />
    // </Stack.Navigator> */
}

export default Navigation;