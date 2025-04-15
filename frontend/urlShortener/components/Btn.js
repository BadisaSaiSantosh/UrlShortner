import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const Btn = ({ value, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
};

export default Btn;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#000", // Black background
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: 95,
    height:50,
    marginVertical: 10,
  },
  text: {
    color: "#fff", // White text
    fontSize: 16,
    fontWeight: "bold",
  },
});
