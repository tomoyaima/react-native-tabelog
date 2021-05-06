import React, { useLayoutEffect } from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
/* components */
import { IconButton } from "../components/IconButton";
/* types */






export const CreateReviewScreen = ({navigation, route,}) => {
  const { shop } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: shop.name,
      headerLeft: () => (
        <IconButton onPress={() => navigation.goBack()} name="x" />
      ),
    });
  }, [navigation, shop]);

  return (
    <SafeAreaView style={styles.container}>
      <Text>New Review Screen</Text>
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
});