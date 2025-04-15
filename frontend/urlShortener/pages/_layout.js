import React from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import All from "./All";
import Add from "./Add";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

const Tab = createBottomTabNavigator();

export default function Layout() {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabBar,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => <AntDesign name="home" size={24} color="white" />,
          }}
        />
        <Tab.Screen
          name="Add"
          component={Add}
          options={{
            tabBarIcon: () => (
              <AntDesign name="pluscircle" size={24} color="white" />
            ),
          }}
        />
        <Tab.Screen
          name="All"
          component={All}
          options={{
            tabBarIcon: () => (
              <Feather name="database" size={24} color="white" />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the navigator takes full screen space
  },
  tabBar: {
    position: "absolute",
    bottom: 10,
    left: 20,
    right: 20,
    borderRadius: 20,
    backgroundColor: "black",
    height: 60,
    elevation: 10, // Android shadow
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
  },
});
