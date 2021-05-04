import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export const ShopReviewItem =({shop})=>{
    const {name,place,imageUrl,score}=shop;
    return <View style= {styles.container}>
        <Image source={{uri:imageUrl,}} style={styles.Image}/>
        <Text>{name}</Text>
        <Text>{place}</Text>
        <Text>{score}</Text>
        <Text>{imageUrl}</Text>
    </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image:{
      width:100,
      height:100,

  },
});
