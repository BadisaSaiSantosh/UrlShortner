import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import Btn from "../components/Btn";

const Home = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Paste the Original Link"
        style={styles.textBox}
        placeholderTextColor="#000"
      />
      <Btn value="Generate" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures screen takes full space
    justifyContent: "center",
    alignItems: "center",
  },
  textBox: {
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: 5,
    borderColor: "#000",
    borderWidth: 1,
    width: "90%",
    height: 50,
    padding: 15,
    margin: 15,
  },
});
