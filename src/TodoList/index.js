import AddTodoForm from "./components/AddTodoForm";
import List from "./components/List";
import styled from "styled-components";
import { useState, useRef } from "react";

const StyledFormwrapper = styled.div`
  padding: 30px 20px;
  max-width: 500px;
  margin: 20px auto;
  border-radius: 10px;
  font-size: 18px;
  letter-spacing: 1.4px;
`;
const StyledTitle = styled.h1`
  margin: 0;
  font-size: 36px;
  color: #60c983;
  margin-bottom: 10px;
  text-align: center;
  font-weight: bold;
  font-family: 微軟正黑體;
`;

function TodoList() {
  const id = useRef(0);
  const [value, setValue] = useState("");

  const [todos, setTodos] = useState([]);

  const [filterData, setFilterData] = useState({
    style: "show-all",
    filterValue: true,
  });

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (!value) return;
    setTodos((Todos) => {
      return [
        {
          id: id.current,
          content: value,
          isDone: false,
        },
        ...Todos,
      ];
    });
    id.current++;
    setValue("");
  };

  const handleDeleteTodo = (id) => {
    setTodos((todos) => {
      const result = todos.filter((todo) => todo.id !== id);
      return result;
    });
  };

  const handleDeleteAll = () => {
    setTodos(() => {
      return [];
    });
  };

  const handleFilterData = (e) => {
    const { classList } = e.target;
    if (!classList.contains("button-switch")) return;
    setFilterData((filterTodos) => {
      if (classList.contains("show-all")) {
        return {
          style: "show-all",
        };
      } else if (classList.contains("show-active")) {
        return {
          style: "show-active",
          filterValue: true,
        };
      } else {
        return {
          style: "show-completed",
          filterValue: false,
        };
      }
    });
  };

  const handleCheckboxClick = (id) => {
    setTodos((todos) => {
      return todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      });
    });
  };

  return (
    <StyledFormwrapper>
      <StyledTitle>Todo-List</StyledTitle>
      <AddTodoForm
        value={value}
        handleInputChange={handleInputChange}
        handleAddTodo={handleAddTodo}
      />
      <List
        todos={todos}
        filterData={filterData}
        handleFilterData={handleFilterData}
        handleDeleteAll={handleDeleteAll}
        handleDeleteTodo={handleDeleteTodo}
        handleCheckboxClick={handleCheckboxClick}
      />
    </StyledFormwrapper>
  );
}

export default TodoList;
