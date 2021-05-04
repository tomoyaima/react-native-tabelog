import * as firebase from 'firebase';
import Constants from "expo-constants";
// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase

if(!firebase.apps.length){
    firebase.initializeApp(Constants.manifest.extra.firebase);
}
  
export const getShops= async()=>{
    const snapshot = await firebase.firestore().collection("shops").get();
    const shops = snapshot.docs.map(doc=>doc.data());
    return shops; 
};

export default firebase;