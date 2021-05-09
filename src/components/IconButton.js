import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import { Feather } from "@expo/vector-icons";


export const IconButton=({
  onPress,
  name,
  color = "#000",
  size,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Feather name={name} color={color} size={size} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
  },
});