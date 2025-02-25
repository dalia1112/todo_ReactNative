import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loadTasks, saveTasks } from '../components/asyncStorageHelper';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  return await loadTasks();
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newState = [...state, { id: Date.now().toString(), ...action.payload, done: false }];
      saveTasks(newState);
      return newState;
    },
    deleteTask: (state, action) => {
      const newState = state.filter(task => task.id !== action.payload);
      saveTasks(newState);
      return newState;
    },
    toggleTaskStatus: (state, action) => {
      const newState = state.map(task => 
        task.id === action.payload ? { ...task, done: !task.done } : task
      );
      saveTasks(newState);
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { addTask, deleteTask, toggleTaskStatus } = tasksSlice.actions;
export default tasksSlice.reducer;
