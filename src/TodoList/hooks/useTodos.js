import { useState, useRef } from "react";

function useTodos() {
  const id = useRef(0);
  const [value, setValue] = useState("");

  const [todos, setTodos] = useState([]);

  const [filterData, setFilterData] = useState({
    style: "show-all",
    filterValue: true,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (value.trim().length === 0) return;
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

  const handleEditClick = (todo) => {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  };

  const handleEditInputChange = (e) => {
    setCurrentTodo({ ...currentTodo, content: e.target.value });
  };

  const handleUpdateClick = (currentTodo) => {
    setTodos((todos) => {
      return todos.map((todo) => {
        if (todo.id !== currentTodo.id) return todo;
        return {
          ...todo,
          content: currentTodo.content,
        };
      });
    });
    setIsEditing(false);
  };

  return {
    id,
    value,
    todos,
    currentTodo,
    filterData,
    isEditing,
    handleInputChange,
    handleAddTodo,
    handleDeleteTodo,
    handleDeleteAll,
    handleFilterData,
    handleCheckboxClick,
    handleEditClick,
    handleEditInputChange,
    handleUpdateClick,
  };
}

export default useTodos;
