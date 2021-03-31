import React from "react";
import "./TodoItem.css";

const TodoItem = ({ todo, onRemove, onToggle }) => {
  return (
    <>
      <li>
        <span
          className={`${todo.done ? "on" : ""}`}
          onClick={() => onToggle(todo.id)}
        >
          &#10003;
        </span>
        <em className={`${todo.done ? "on" : ""}`}>{todo.text}</em>
        <button onClick={() => onRemove(todo.id)}>삭제</button>
      </li>
    </>
  );
};

export default TodoItem;

