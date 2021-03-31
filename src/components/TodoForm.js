import React, { useRef, useState } from "react";
import "./TodoForm.css";

const TodoForm = ({ onAdd }) => {
  const textRef = useRef();
  const [text, setText] = useState("");

  const onText = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText("");
    textRef.current.focus();
  };

  return (
    <form className="TodoForm" onSubmit={onSubmit}>
      <input
        type="text"
        ref={textRef}
        placeholder="입력 후, 추가 버튼을 누르세요"
        value={text}
        onChange={onText}
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoForm;
