import { useState, useRef } from "react";

function useTodos() {
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

  return {
    id,
    value,
    todos,
    filterData,
    handleInputChange,
    handleAddTodo,
    handleDeleteTodo,
    handleDeleteAll,
    handleFilterData,
    handleCheckboxClick,
  };
}

export default useTodos;
