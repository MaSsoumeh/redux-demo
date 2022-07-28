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
      state.push(newTodo);
    },
    removeTodo: (state, action) => {
      let newState = state.filter((todo) => todo.id !== action.payload.id);
      return newState;
    },
  },
});
export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
