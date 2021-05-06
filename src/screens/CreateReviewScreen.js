import React, { useLayoutEffect } from "react";
import { useState, useContext } from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
/* components */
import { IconButton } from "../components/IconButton";
/* types */
import {Button} from "../components/Button"
import {TextArea} from  '../components/TextArea'
import {StarInput} from  '../components/Starinput'
import {addReview} from  '../lib/firebase'
import { UserContext } from "../contexts/userContext";
import firebase from 'firebase';

export const CreateReviewScreen = ({navigation, route,}) => {
  const { shop } = route.params;
  const [text, setText] = useState("");
  const [score, setScore] = useState(3);
  const {user} = useContext(UserContext)
  const onSubmit = async() => {
    const review = {
      user:{
        name: user.name,
        id: user.id,
      },
      shop:{
        name:shop.name,
        id:shop.id
      },
      text,
      score,
      updatedAt: firebase.firestore.Timestamp.now(),
      createdAt: firebase.firestore.Timestamp.now(),
    };
    await addReview(shop.id,review)
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: shop.name,
      headerLeft: () => (
        <IconButton onPress={() => navigation.goBack()} name="x" />
      ),
    });
  }, [navigation, shop]);

  return (
    <SafeAreaView style={styles.container}>
      <StarInput score={score} onChangeScore={(value)=> setScore(value)}/>
      <TextArea value={text} onChangeText = {(value)=> setText(value)} label = "レビュー" placeholder="レビューを書いてください"/>
      <Button text="レビューを投稿する" onPress= {()=> onSubmit()}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});