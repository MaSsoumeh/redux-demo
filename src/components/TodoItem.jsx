import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../store/todoSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  const deleteTodo = () => {
    dispatch(
      removeTodo({
        id,
      })
    );
  };
  const checkboxHandler = () => {
    dispatch(
      updateTodo({
        id,
        completed: !completed,
      })
    );
  };
  return (
    <li
      style={{
        padding: "8px",
        borderRadius: "12px",
        backgroundColor: `${completed ? "#c0e0b7" : "transparent"}`,
        borderBottom: "1px solid black",
        marginBottom: "8px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "16px" }}
            defaultChecked={completed}
            onClick={checkboxHandler}
          ></input>
          {title}
        </span>
        <button
          style={{
            backgroundColor: "#ff9a9e",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
          }}
          onClick={deleteTodo}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
