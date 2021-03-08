import React from "react";
import Todo from "./components/Todo";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";

const GlobalStyle = createGlobalStyle`
body{
  background: #e9ecef;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />

      {/* <TodoTemplate></TodoTemplate> */}
      <Todo />
    </>
  );
}

export default App;
