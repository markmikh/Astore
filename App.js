import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ProductsScreen } from "./src/features/products/components/screens/products.screens";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Settings = () => <Text>Settings</Text>;
const Cart = () => <Text>Cart</Text>;
const Map = () => <Text>Map</Text>;

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              // eslint-disable-next-line react/no-unstable-nested-components
              tabBarIcon: ({ color, size }) => {
                let iconName;

                if (route.name === "Products") {
                  iconName = "storefront-sharp";
                } else if (route.name === "Settings") {
                  iconName = "settings-sharp";
                } else if (route.name === "Map") {
                  iconName = "map-sharp";
                } else if (route.name === "Cart") {
                  iconName = "cart-sharp";
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: "blue",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="Products" component={ProductsScreen} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Cart" component={Cart} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
