import React,{useEffect,useContext,useState} from "react";
import {
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  Text,
  View,
} from "react-native";
import {signin} from "../lib/firebase"
import {UserContext} from "../contexts/userContext"
import {Button} from "../components/Button";

export const SignUp = () => {
  const {setUser} = useContext(UserContext);
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    const fetchUser = async()=>{
      const user = await signin();
      console.log(user);
      setUser(user);
    };
    fetchUser();
},[]);
    const Login =()=>{
        setLoading(true);

    }
  return (
    <SafeAreaView style={styles.container}>
    
        <View>
          <ActivityIndicator size="large" />
          <Text style={styles.text}>ログイン中...</Text>
        </View>
      
    </SafeAreaView>
  );
};

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