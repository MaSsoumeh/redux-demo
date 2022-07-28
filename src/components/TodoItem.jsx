import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../store/todoSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  const deleteTodo = () => {
    dispatch(
      removeTodo({
        id: id,
      })
    );
  };
  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="mr-3"
            defaultChecked={completed}
          ></input>
          {title}
        </span>
        <button className="btn btn-danger" onClick={deleteTodo}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
