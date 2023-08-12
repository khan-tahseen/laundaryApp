import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import PickupScreen from "./screens/PickupScreen";
import CartScreen from "./screens/CartScreen";

export default function StackNavigator() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="pickUp"
                    component={PickupScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Cart"
                    component={CartScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
