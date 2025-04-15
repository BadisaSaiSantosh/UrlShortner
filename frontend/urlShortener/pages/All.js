import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const All = () => {
  return (
    <View style={styles.container}>
      <FlatList />
    </View>
  );
};

export default All;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures screen takes full space
    justifyContent: "center",
    alignItems: "center",
  },
});
