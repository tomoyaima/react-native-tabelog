import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image,FlatList, SafeAreaView } from 'react-native';
import {UserContext} from "./src/contexts/userContext"
import {AppNavigator} from "./src/navigation/AppNavigator"
import {ReviewContext} from "./src/contexts/reviewsContext"

export default function App() {
  const [user ,setUser]=useState();
  const [reviews ,setReviews]=useState([]);
  return (
    <UserContext.Provider value={{user , setUser}}>
      <ReviewContext.Provider value ={{reviews,setReviews}}>
      <AppNavigator/>
      </ReviewContext.Provider>
    </UserContext.Provider>
  );
}

