import firebase from 'firebase';
import Constants from "expo-constants";
import "firebase/auth";
import "firebase/storage";
import {initialUser} from "../type/user"


// Initialize Firebase
export const signin = async() => {
    var provider = new firebase.auth.GoogleAuthProvider();
    const userCredential = await firebase.auth().signInWithRedirect(provider);
    const {uid,displayName,email} =  userCredential.user;
    const userDoc = await firebase.firestore().collection("users").doc(uid).get();
    
    if(!userDoc.exists){
        
        initialUser.email = email;
        initialUser.name= displayName;
        await firebase.firestore().collection("users").doc(uid).set(initialUser);
        return {
            ...initialUser,
            id:uid,
        };
    }else{
        return{
            id:uid,
            ...userDoc.data(),
        }
    };
};

// import Firebase from "./Firebase";
export const Logout = () => {
    
    firebase.auth().signOut().then(()=>{
    console.log("ログアウトしました");
    
    })
    .catch( (error)=>{
    console.log(`ログアウト時にエラーが発生しました (${error})`);
    });

}

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


export const CreateReviewRef= async(shopId)=>{
    return await firebase.firestore().collection("shops").doc(shopId).collection("reviews").doc();
};


export const uploadImage = async (uri, path) => {
    // uriをblobに変換
    const localUri = await fetch(uri);
    const blob = await localUri.blob();
    // storegaにアップロード
    const ref = firebase.storage().ref().child(path);
    

    let downloadUrl = "";
    try {
      await ref.put(blob);
      downloadUrl = await ref.getDownloadURL();
    } catch (err) {
      console.log(err);
    }
    return downloadUrl;
  };

  export const getReviews= async(shopId)=>{
      const reviewDocs = await firebase.firestore().collection("shops").doc(shopId).collection("reviews").orderBy("createdAt","desc").get();
      return reviewDocs.docs.map(
          (doc) => ({...doc.data(), id: doc.id})
      );
  }
export default firebase;