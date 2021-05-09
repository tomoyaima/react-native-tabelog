import React, {useEffect, useState,useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
    StyleSheet,
    SafeAreaView,
    ActivityIndicator,
    Text,
    View,
  } from "react-native";
import { MainTabNavigator } from './MainTabNavigator';
import {AuthScreen} from "../screens/AuthScreen";
import {UserContext} from "../contexts/userContext";
import {SignUp} from  "../screens/SignUp"
import {Button} from "../components/Button"

export const AuthNavigator =() =>{
    const [loading,setLoading]=useState(false);
    const Login =()=>{
        setLoading(true);
    }
    return(
        <View style={styles.container}>
        {!loading?
            (
            <Button onPress={Login} text ="ログインする"/>
        ):(
            <AuthScreen/>
        )}
         </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",

    },
    text: {
      marginTop: 16,
      fontSize: 12,
      color: "#888",
    },
  });