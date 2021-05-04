import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
import {getShops} from "./src/lib/firebase"

export default function App() {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    getFirebaseItems();
  },[]);

  const getFirebaseItems= async()=>{
    const shops = await getShops();
    setShops(shops); 
  };

  const shopItems = shops.map((shop,index)=> (
    <View style={{margi:10}} key={index.toString()}>
      <Text>{shop.name}</Text>
      <Text>{shop.place}</Text>
    </View>
  
  ));
  return (
    <View style={styles.container}>
      {shopItems}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
