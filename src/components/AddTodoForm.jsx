import { useState } from "react";
import { addTodo } from "../store/todoSlice";
import { useDispatch } from "react-redux";

const AddTodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    if (value) {
      dispatch(
        addTodo({
          title: value,
        })
      );
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{ marginTop: "12px", marginBottom: "12px" }}
    >
      <label style={{ marginRight: "8px", color: "#2d285f" }}>Name</label>
      <input
        type="text"
        style={{
          marginBottom: "8px",
          marginRight: "8px",
          borderRadius: "14px",
          outline: "none",
          border: "none",
          padding: "16px",
          width: "300px",
        }}
        placeholder="Add todo..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>

      <button
        type="submit"
        style={{
          marginBottom: "8px",
          borderRadius: "14px",
          border: "none",
          padding: "16px",
          color: "#2d285f",
          fontWeight: "bold",
          backgroundColor: "#fcb9a2",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default AddTodoForm;
