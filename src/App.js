import React from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TotalCompleteItems from "./components/TotalCompleteItems";

const App = () => {
  return (
    <div
      style={{
        backgroundColor: "#f7f3ef",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "40px",
        borderRadius: "12px",
      }}
    >
      <h1 style={{ color: "#ff9a9e" }}>My Todo List</h1>
      <AddTodoForm />
      <TodoList />
      <TotalCompleteItems />
    </div>
  );
};

export default App;
