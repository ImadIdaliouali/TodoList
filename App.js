import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [tasks, setTasks] = useState([{ id: 1, title: 'I will wake up at 8 in the morning' }, { id: 2, title: 'I will practice html for 1 hour' }, { id: 3, title: 'I will give time for 2 hours css' }, { id: 4, title: 'Then I will have breakfast' }]);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>TodoList</Text>
      <View style={styles.addContainer}>
        <TextInput style={styles.input} placeholder='Enter your next task' />
        <TouchableOpacity style={styles.addButton}><Text style={{ color: '#fff' }}>Add</Text></TouchableOpacity>
      </View>
      <View style={styles.TasksList} >
        <FlatList
          data={tasks}
          renderItem={({ item }) => <Task text={item.title} />}
          key={item => item.id}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  addContainer: {
    marginVertical: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  input: {
    height: 50,
    width: 250,
    borderWidth: 1,
    borderColor: '#2C6BEC',
    borderRadius: 10,
    padding: 10,
  },
  addButton: {
    height: 50,
    width: 65,
    borderRadius: 10,
    backgroundColor: '#2C6BEC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TasksList: {

  }
});
