import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const SIZE = 56;



export const FloatingActionButton = ({iconName, onPress,}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Feather name={iconName} color="#fff" size={30} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: "#900",
    position: "absolute",
    right: 16,
    bottom: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});