//auth/Login
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import Btn from "../components/Btn";

  
  const Login = ({setScreen}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome Back...</Text>
        <TextInput placeholder="Enter Email" style={styles.textBox} placeholderTextColor="#000" />
        <TextInput placeholder="Enter Password" style={styles.textBox} placeholderTextColor="#000" secureTextEntry />
  
        <Btn value="Login" />
        <Text style={styles.signupText}>if you have no account,
          <TouchableOpacity onPress={()=>setScreen("Signup")}>
          <Text style={{fontWeight:"bold"}}>Signup</Text> 
          </TouchableOpacity>
          </Text>
  
      </View>
    );
  };
  
  export default Login;
  
  const styles = StyleSheet.create({
    container: { 
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
      marginTop:"45%",
    },
    text:{
      fontSize:24,
      fontWeight: "bold",
      color:"#000",
      paddingBottom:30
    },
    textBox: {
      backgroundColor: "#fff", 
      color: "#000", 
      borderRadius: 5,
      borderColor: "#000", // black border
      borderWidth: 1,
      width: "90%",
      height: 50,
      padding: 15,
      margin: 15,
    },
    signupText:{
      marginTop:10,
      textSize:20,
  
    }
  });
  