
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; 
import CompletedTask from "./completedTask";
import StackNavigator from "./StackNavigator";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: "black" }}>
        
        <Tab.Screen 
          name="Main" 
          component={StackNavigator} 
          options={{
            tabBarIcon: () => <FontAwesome name="home" size={24} color="black" /> ,
          }}
        />
        
        
        <Tab.Screen 
          name="Checked" 
          component={CompletedTask} 
          options={{
            tabBarIcon: () => <FontAwesome5 name="calendar-check" size={24} color="black" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
