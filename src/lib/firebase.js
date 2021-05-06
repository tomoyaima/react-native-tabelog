import firebase from 'firebase';
import Constants from "expo-constants";
import "firebase/auth";
import {initialUser} from "../type/user"


// Initialize Firebase
export const signin = async() => {

    const userCredential = await firebase.auth().signInAnonymously();
    const {uid} =  userCredential.user;
    console.log(uid);
    const userDoc = await firebase.firestore().collection("users").doc(uid).get();
    console.log(userDoc);
    if(!userDoc.exist){
        await firebase.firestore().collection("users").doc(uid).set(initialUser);
        return {
            ...initialUser,
            id:uid
        };
    }else{
        return{
            id:uid,
            ...userDoc.data(),
        }
    };
};

if(!firebase.apps.length){
    firebase.initializeApp(Constants.manifest.extra.firebase);
}
  
export const getShops= async()=>{
    const snapshot = await firebase.firestore().collection("shops").orderBy("score","desc").get();
    const shops = snapshot.docs.map(doc=>({...doc.data(), id:doc.id}));
    return shops; 
};

export const updateUser= async(userId,params)=>{
    await firebase.firestore().collection("users").doc(userId).update(params);
};


export const addReview= async(shopId, review)=>{
    await firebase.firestore().collection("shops").doc(shopId).collection("reviews").add(review);
};


export default firebase;