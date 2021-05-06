import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image,FlatList, SafeAreaView } from 'react-native';
import {getShops} from "../lib/firebase"
import {ShopReviewItem} from "../components/ShopReviewItem"



export const UserScreen =({navigation}) =>{
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
  const onPressShop = (shop) => {
    navigation.navigate("Shop",{shop});
  };

  return (
  <SafeAreaView style={styles.container}>
   <Text>User</Text>
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
