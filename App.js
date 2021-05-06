import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image,FlatList, SafeAreaView } from 'react-native';
import {UserContext} from "./src/contexts/userContext"
import {AppNavigator} from "./src/navigation/AppNavigator"


export default function App() {
  const [user ,setUser]=useState();
  return (
    <UserContext.Provider value={{user , setUser}}>
    <AppNavigator/>
    </UserContext.Provider>
  );
}

