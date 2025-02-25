// ToDoList.js
import React, { useState } from 'react';
import { FlatList, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ToDoItem from "./ToDoItem";

export default function ToDoList({ tasks, deleteTask, toggleTaskStatus, navigation }) {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const filters = ["All", "In progress", "Done"];

  const filteredTasks = tasks.filter(task => {
    if (selectedFilter === "All") return true;
    return selectedFilter === "Done" ? task.done : !task.done;
  });

  return (
    <View style={styles.listContainer}>
      {tasks.length > 0 && (
        <View style={styles.filterContainer}>
          {filters.map((status) => (
            <TouchableOpacity 
              key={status} 
              style={[
                styles.filterButton, 
                selectedFilter === status && styles.activeFilterButton
              ]} 
              onPress={() => setSelectedFilter(status)}
            >
              <Text style={styles.filterText}>{status}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ToDoItem 
            task={item} 
            deleteTask={deleteTask} 
            toggleTaskStatus={toggleTaskStatus} 
            navigation={navigation} 
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%', 
    alignItems: 'center',
  },
  filterContainer: { 
    flexDirection: "row", 
    justifyContent: "center", 
    marginVertical: 10 
  },
  filterButton: { 
    padding: 10, 
    marginHorizontal: 5, 
    borderWidth: 1, 
    borderRadius: 20, 
    width: 100, 
    backgroundColor: "black" 
  },
  activeFilterButton: { 
    backgroundColor: "gray" 
  },
  filterText: { 
    color: "white", 
    textAlign: "center" 
  },
});
