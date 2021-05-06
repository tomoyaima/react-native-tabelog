import React,{useEffect} from "react";
import {
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  Text,
} from "react-native";
import firebase from "firebase"

export const initialUser = {
    
    name: "",
    updatedAt: firebase.firestore.Timestamp.now(),
    createdAt: firebase.firestore.Timestamp.now(),
}