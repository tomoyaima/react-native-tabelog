import React, {useEffect, useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeStackNavigator} from "./HomeStackNavigator"
import {UserScreen} from "../screens/UserScreen"
import {Feather} from "@expo/vector-icons"
import { InteractionManager } from 'react-native';
const Tab = createBottomTabNavigator();

export const MainTabNavigator= () =>{

  return (
    <Tab.Navigator
        tabBarOptions={{
            activeTintColor: "#900",
            inactiveTintColor: "#999",
        }}
    >
        <Tab.Screen 
            name="Home" 
            component={HomeStackNavigator}  
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <Feather name="home" color={color} size={size} />
                ),
            }}
        />
      <Tab.Screen 
            name="User" 
            component={UserScreen} 
            options={{
                tabBarLabel: 'User',
                tabBarIcon: ({ color, size }) => (
                    <Feather name="user" color={color} size={size} />
                ),
            }}
        />
    </Tab.Navigator>
  );
};
