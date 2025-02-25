// screens/DetailsScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DetailsScreen = ({ route }) => {
  const { item } = route.params; 

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Task Details</Text>
      <Text style={styles.taskTitle}> {item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  taskTitle: { fontSize: 18, color: "gray" },
});

export default DetailsScreen;

