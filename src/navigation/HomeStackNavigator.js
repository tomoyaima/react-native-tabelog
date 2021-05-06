import React, {useEffect, useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import {ShopScreen} from '../screens/ShopScreen'
import {CreateReviewScreen} from "../screens/CreateReviewScreen";


const Stack = createStackNavigator();
const RootStack = createStackNavigator();

const MainStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: "#000",
    }}
  >
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Shop" component={ShopScreen} />
  </Stack.Navigator>
);

export const HomeStackNavigator = () => (
  <RootStack.Navigator mode="modal">
    <RootStack.Screen
      name="Main"
      component={MainStack}
      options={{ headerShown: false }}
    />
    <RootStack.Screen name="CreateReview" component={CreateReviewScreen} />
  </RootStack.Navigator>
);