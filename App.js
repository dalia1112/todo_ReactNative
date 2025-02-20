import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput } from 'react-native';

export default function App() {
  const Data = [{ id: "1", title: "First Item" }, { id: "2", title: "Second Item" }];
  const filters = ["All", "In progress", "Done"];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>TODO APP</Text>
      <TextInput style={styles.input} placeholder="Enter Title" />
      <TextInput style={styles.input} placeholder="Enter Description" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <View style={styles.filterContainer}>
        {["All", "In progress", "Done"].map((status) => (
          <TouchableOpacity
            key={status}
            style={styles.filterButton}
          >
            <Text style={styles.filterText}>{status}</Text>
          </TouchableOpacity>
        ))}
      </View> 

      <FlatList
        data={Data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.task}>
            <Text>{item.title}</Text>
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    flex: 1, 
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  header: { textAlign: "center", fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: { borderWidth: 1, borderRadius: 4, padding: 10, marginBottom: 10, width: 300, color: 'gray', borderColor: 'gray' },
  button: { backgroundColor: "black", padding: 10, alignItems: "center", borderRadius: 5, width: 200 },
  buttonText: { color: "white", fontWeight: "bold" },
  filterContainer: { flexDirection: "row", justifyContent: "center", marginVertical: 10 },
  filterButton: { padding:10, margin: 10, borderWidth: 1, borderRadius: 20, width: 100, backgroundColor: "black" },
  filterText: { color: "white", textAlign: 'center' },
  task: { padding: 10, borderWidth: 1, borderRadius: 20, marginVertical: 5, width: 300 },
});

