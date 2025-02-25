// ToDoForm.js
import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Text, View } from "react-native";

export default function ToDoForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (!title.trim()) return;
    addTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <View style={styles.formContainer}>
      <TextInput 
        style={styles.input} 
        placeholder="Enter Title" 
        value={title} 
        onChangeText={setTitle} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Enter Description" 
        value={description} 
        onChangeText={setDescription} 
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: { alignItems: "center", marginVertical: 10 },
  input: { borderWidth: 1, borderRadius: 4, padding: 10, marginBottom: 10, width: 300, color: "gray", borderColor: "gray" },
  button: { backgroundColor: "black", padding: 10, alignItems: "center", borderRadius: 5, width: 200 },
  buttonText: { color: "white", fontWeight: "bold" },
});
