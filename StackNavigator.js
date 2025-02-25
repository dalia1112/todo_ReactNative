// navigation/StackNavigator.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DetailsScreen from "./Details";
import HomeScreen from "./HomeScreen";


const Stack = createStackNavigator();

const StackNavigator = () => {

  return (
    
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: " Details" }} />
      </Stack.Navigator>
    
  );
};

export default StackNavigator;
