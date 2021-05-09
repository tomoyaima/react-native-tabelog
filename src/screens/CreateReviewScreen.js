import React, { useState,useLayoutEffect,useContext } from "react";
import { StyleSheet, SafeAreaView, Text, View, Image, Alert,TouchableWithoutFeedback ,Keyboard } from "react-native";
/* components */
import { IconButton } from "../components/IconButton";
/* types */
import {pickImage} from "../lib/image-picker"
import {Button} from "../components/Button"
import {TextArea} from  '../components/TextArea'
import {StarInput} from  '../components/Starinput'
import {CreateReviewRef,uploadImage} from  '../lib/firebase'
import { UserContext } from "../contexts/userContext";
import firebase from 'firebase';
import {getExtention} from '../utils/file'
import {Loading} from '../components/Loading'
import {ReviewContext} from "../contexts/reviewsContext"


export const CreateReviewScreen = ({navigation, route,}) => {
  const { shop } = route.params;
  const [text, setText] = useState("");
  const [score, setScore] = useState(3);
  const {user} = useContext(UserContext);
  const {reviews, setReviews} = useContext(ReviewContext)
  const [imageUri, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const onPickImage = async()=> {
    const uri = await pickImage();
    setImageUrl(uri);
  };
  const onSubmit = async() => {
    if(!text||!imageUri){
      Alert.alert("レビュー画像がありません");
      return;
    }
    setLoading(true);
    const ReviewDocRef = await CreateReviewRef(shop.id);
    //strageのpathを設定
    const ext = getExtention(imageUri);
    const storagePath =  `reviews/${ReviewDocRef.id}.${ext}`;
    // console.log(storagePath);
    const downloadUrl = await uploadImage(imageUri,storagePath);

    const review = {
      id:ReviewDocRef.id,
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
      imageUrl: downloadUrl ,
      updatedAt: firebase.firestore.Timestamp.now(),
      createdAt: firebase.firestore.Timestamp.now(),
    };
    await ReviewDocRef.set(review);
    setReviews([review,...reviews]);
    setLoading(false);
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: shop.name,
      headerLeft: () => (
        <IconButton onPress={() => navigation.goBack()} name="x" size={32} />
      ),
    });
  }, [navigation, shop]);

  return (
    <SafeAreaView style={styles.container}>
      <StarInput score={score} onChangeScore={(value) => setScore(value)} />
      <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
        <View>
        <TextArea value={text} onChangeText={(value) => {setText(value);}} label="レビュー" placeholder="レビューを書いて下さい"/>
        <View style={styles.photoContainer}>
        <IconButton onPress={onPickImage} name="camera" color="gray" size={16} />
        {!!imageUri && (
          <Image source={{ uri: imageUri }} style={styles.image} />
        )}
         <Button text="レビューを投稿する" onPress={onSubmit} />
      </View>
        </View>
      </TouchableWithoutFeedback>
      
     
      <Loading visible={loading} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  photoContainer: {
    margin: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 8,
  },
});