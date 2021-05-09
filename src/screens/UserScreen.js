import React, {useEffect, useState,useContext} from 'react';
import { StyleSheet, Text, View, Image,FlatList, SafeAreaView } from 'react-native';
import {getShops , updateUser,Logout} from "../lib/firebase"
import {ShopReviewItem} from "../components/ShopReviewItem"
import {Form} from'../components/Form'
import {Button} from '../components/Button'
import {Loading} from '../components/Loading'
import {UserContext} from '../contexts/userContext'
import firebase from 'firebase'

export const UserScreen =({navigation}) =>{
  const [shops, setShops] = useState([]);
  const {user,setUser} =useContext(UserContext);
  const [name, setName] = useState(user.name);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getFirebaseItems();
  },[]);

  const getFirebaseItems= async()=>{
    const shops = await getShops();
    setShops(shops); 

  };

  const onSubmit = async()=>{
    setLoading(true);
    const updatedAt = firebase.firestore.Timestamp.now();
    await updateUser(user.id,{name, updatedAt});
    setUser({...user,name,updatedAt});
    setLoading(false);
  };
  const onLogout = async()=>{
    setLoading(true);
    await Logout();
    setUser(undefined);
    setName(undefined);
    console.log(user);
    setLoading(false);
    console.log(false)
  };

  return (
  <SafeAreaView style={styles.container}>
   <Form value={name} onChangeText={(text)=>{setName(text)}} label="名前"/>
   <Text>{user.email}</Text>
   <Button onPress={onSubmit} text ="保存する"/>
   <Button onPress={onLogout} text ="ログアウト"/>
   <Loading visible ={loading}/>
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
