import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadTasks = () => {
  return AsyncStorage.getItem('tasks')
    .then(storedTasks => storedTasks ? JSON.parse(storedTasks) : [])
    .catch(error => {
      console.error('Error loading tasks from storage:', error);
      return [];
    });
};

export const saveTasks = (tasks) => {
  AsyncStorage.setItem('tasks', JSON.stringify(tasks))
    .catch(error => console.error('Error saving tasks to storage:', error));
};