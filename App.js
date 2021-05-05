import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image,FlatList, SafeAreaView } from 'react-native';
import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
import {getShops} from "./src/lib/firebase"
import {ShopReviewItem} from "./src/components/ShopReviewItem"
import {AppNavigator} from "./src/navigation/AppNavigator"

export default function App() {
  return (
    <AppNavigator/>
  );
}

