//auth/Signup
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Btn from "../components/Btn";

const Signup = ({setScreen}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to SafeURL </Text>
      <TextInput placeholder="Enter Email" style={styles.textBox} placeholderTextColor="#000" />
      <TextInput placeholder="Enter Password" style={styles.textBox} placeholderTextColor="#000" secureTextEntry />
      <TextInput placeholder="Re-Enter Password" style={styles.textBox} placeholderTextColor="#000" secureTextEntry />

      <Btn value="Signup" />

      {/* Navigate to Login on Press */}
      <Text style={styles.signupText}>
        If you already have an account,{" "}
        <TouchableOpacity onPress={() => setScreen("Login")}>
          <Text style={{ fontWeight: "bold" }}>Login</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    marginTop: "45%",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    paddingBottom: 30,
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
  signupText: {
    marginTop: 10,
    fontSize: 16,
  },
});
