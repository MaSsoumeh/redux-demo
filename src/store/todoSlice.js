import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [
    {
      id: 1,
      title: "go shopping",
      completed: false,
    },
    { id: 2, title: "go walking", completed: false },
    {
      id: 3,
      title: "learn coding",
      completed: true,
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: new Date() * Math.random(),
        title: action.payload.title,
        completed: false,
      };
      state.unshift(newTodo);
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    updateTodo: (state, action) => {
      const todoIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      state[todoIndex].completed = action.payload.completed;
      return state;
    },
  },
});
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
