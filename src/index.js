import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";
import TodoProvider  from "./TodoList/hooks/useTodos";

ReactDOM.render(
<TodoProvider>
  <TodoList />
</TodoProvider>,
 document.getElementById("root")
 );
