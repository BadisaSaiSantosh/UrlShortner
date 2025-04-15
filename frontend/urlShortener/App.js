// //app.js
// import { StyleSheet, Text, View } from 'react-native';
// import _layout from './pages/_layout';
// import { useState } from 'react';
// import Login from './auth/Login';
// import Signup from './auth/Signup';
// import { NavigationContainer } from '@react-navigation/native';
// import Layout from './pages/_layout';

// export default function App() {
//   const [currentScreen,setCurrentScreen]=useState("Login");
//   return (
//     <View >
//       {/* for auth */}
//       {/* {(currentScreen==="Login") 
//       ? (<Login setScreen={setCurrentScreen}></Login>) //if condition is true
//       : (<Signup setScreen={setCurrentScreen}></Signup>)}  */}
//       <NavigationContainer>
//       <Layout></Layout>
//       </NavigationContainer>
      
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import 'react-native-gesture-handler';  // Add this at the top!
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'expo-status-bar'; // If using Expo
import { StyleSheet } from 'react-native';
import Layout from './pages/_layout';  // Ensure correct path

export default function App() {
  return (
    <NavigationContainer>
      <Layout />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
