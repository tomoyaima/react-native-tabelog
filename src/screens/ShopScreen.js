import React, {useState, useEffect,useContext } from "react";
import { StyleSheet, SafeAreaView,Text,FlatList } from "react-native";
import {RouteProp} from "@react-navigation/native";
import {ShopDetail} from "../components/ShopDetail"
import {FloatingActionButton} from "../components/FloatingActionButton"
import {ReviewItem} from "../components/ReviewItem"
import {getReviews} from "../lib/firebase"
import {ReviewContext} from "../contexts/reviewsContext"



export const ShopScreen = ({navigation , route}) => {
    const {shop} = route.params;
    console.log(shop);
    const {reviews,setReviews} = useContext(ReviewContext);
    
    useEffect(() => {
      navigation.setOptions({ title: shop.name });
  
      const fetchReviews = async () => {
        const reviews = await getReviews(shop.id);
        setReviews(reviews);
      };
      fetchReviews();
    }, [shop]);

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          ListHeaderComponent={<ShopDetail shop={shop} />}
          data={reviews}
          renderItem={({ item }) => <ReviewItem review={item} />}
          keyExtractor={(item) => item.id}
        />
        <FloatingActionButton
          iconName="plus"
          onPress={() => navigation.navigate("CreateReview", { shop })}
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