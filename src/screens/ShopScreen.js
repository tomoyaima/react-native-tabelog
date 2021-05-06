import React, { useEffect } from "react";
import { StyleSheet, SafeAreaView,Text } from "react-native";
import {RouteProp} from "@react-navigation/native";
import {ShopDetail} from "../components/ShopDetail"
import {FloatingActionButton} from "../components/FloatingActionButton"

export const ShopScreen = ({navigation , route}) => {
    const {shop} = route.params;
    console.log(shop);
  useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.container}>
     <ShopDetail shop={shop}/>
     <FloatingActionButton
        iconName = "plus"
        onPress={()=> navigation.navigate("CreateReview",{shop})}
     />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
});