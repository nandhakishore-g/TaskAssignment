import { StatusBar } from "expo-status-bar";
import React from "react";
import SignIn from "./screens/SignIn";
import Signup from "./screens/SignUp";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";


const Stack = createNativeStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen name="SignUp" component={Signup}  />
          <Stack.Screen name="SignIn" component={SignIn}  />
        </Stack.Navigator>
      </NavigationContainer>
    )
}