// HomeScreen.js
import React, { useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks, addTask, deleteTask, toggleTaskStatus } from './rtk/slice';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleAddTask = (title, description) => {
    dispatch(addTask({ title, description }));
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggleTaskStatus = (id) => {
    dispatch(toggleTaskStatus(id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>TODO APP</Text>
      <ToDoForm addTask={handleAddTask} />
      <ToDoList tasks={tasks} deleteTask={handleDeleteTask} toggleTaskStatus={handleToggleTaskStatus} navigation={navigation} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", alignItems: "center", justifyContent:"center"},
  header: { textAlign: "center", fontSize: 24, fontWeight: "bold" },
});

