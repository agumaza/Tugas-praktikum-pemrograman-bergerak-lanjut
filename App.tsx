// App.js
import React, { useState } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screen/HomeScreen.tsx";
import SecondScreen from "./screen/SecondScreen.tsx";
import ProfileScreen from "./screen/ProfileScreen.tsx";
import LoginScreen from "./screen/LoginScreen";
import Icon from 'react-native-vector-icons/FontAwesome5.js';
const tabs = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <tabs.Navigator>
      <tabs.Screen 
        name="Home"
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={25}/>
          ),
        }}
      />
      <tabs.Screen 
        name="Second"
        component={SecondScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="folder" color={color} size={25}/>
          ),
        }}
      />
      <tabs.Screen 
        name="Profile"
        component={ProfileScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={25}/>
          ),
        }}
      />
    </tabs.Navigator>
  );
};

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      {loggedIn ? <MainNavigator /> : <LoginScreen />}
    </NavigationContainer>
  );
};

export default App;
