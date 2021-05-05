import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image,FlatList, SafeAreaView } from 'react-native';
import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
import {getShops} from "./src/lib/firebase"
import {ShopReviewItem} from "./src/lib/components/ShopReviewItem.js"


export default function App() {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    getFirebaseItems();
  },[]);

  const getFirebaseItems= async()=>{
    const shops = await getShops();
    setShops(shops); 

  };

  // const shopItems = shops.map((shop,index)=> (
  //   <ShopReviewItem shop={shop} key={index.toString()}/> 
  // ));

  return (
  <SafeAreaView style={styles.container}>
    <FlatList 
      data={shops}
      renderItem={({item}) => (
        <ShopReviewItem shop={item}/>
      )}
      keyExtractor={(item,index) => index.toString()}
      numColumns={2}
    />
  </SafeAreaView>
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
