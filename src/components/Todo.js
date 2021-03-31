import React, { useRef, useState } from "react";
import "./Todo.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
  const idRef = useRef(1);
  const [todos, setTodos] = useState([]);

  const onAdd = (text) => {
    setTodos([
      ...todos,
      {
        id: idRef.current++,
        text,
        done: false,
      },
    ]);
  };

  const onRemove = (id) => {
    const newData = todos.filter((todo) => todo.id !== id);
    setTodos(newData);
  };

  const onToggle = (id) => {
    const newData = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newData);
  };

  return (
    <div className="todo">
      <h1>TodoList</h1>
      <TodoForm onAdd={onAdd} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </div>
  );
};

export default Todo;
