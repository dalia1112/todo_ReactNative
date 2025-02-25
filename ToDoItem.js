// ToDoItem.js
import React from 'react';
import { View, Text, TouchableOpacity, Platform, StyleSheet } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function ToDoItem({ task, deleteTask, toggleTaskStatus, navigation }) {
  return (
    <View style={styles.task}>
      <TouchableOpacity onPress={() => navigation.navigate("Details", { item: task })}>
        <Text style={task.done ? styles.taskCompleted : styles.taskText}>{task.title}</Text>
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => deleteTask(task.id)}>
          {Platform.OS === "ios" ? (
            <Feather name="trash" size={24} color="red" />
          ) : (
            <FontAwesome name="trash" size={24} color="red" />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleTaskStatus(task.id)}>
          {Platform.OS === "ios" ? (
            <AntDesign name="checkcircleo" size={24} color="green" />
          ) : (
            <Entypo name="check" size={24} color="green" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  task: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    padding: 10, 
    borderWidth: 1, 
    borderRadius: 20, 
    marginVertical: 5, 
    width: 300 
  },
  taskText: { color: "black" },
  taskCompleted: { color: "gray", textDecorationLine: "line-through" },
  iconContainer: { flexDirection: "row", gap: 10 },
});
