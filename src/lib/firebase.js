import firebase from 'firebase';
import Constants from "expo-constants";
import "firebase/auth";

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