import { useState, useEffect, useRef, createContext, useContext } from "react";

const TodoContext = createContext();
export const useTodos = () => useContext(TodoContext);

export default function TodoProvider({ children }) {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");

  const [todos, setTodos] = useState(() => {
    return localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : [];
  });

  const [filterData, setFilterData] = useState({
    style: "show-all",
    filterValue: true,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    if (isEditing) inputRef.current.focus();
  }, [isEditing, currentTodo]);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (value.trim().length === 0) return;
    setTodos((Todos) => {
      return [
        {
          id: new Date(),
          content: value,
          isDone: false,
        },
        ...Todos,
      ];
    });
    setValue("");
  };

  const handleDeleteTodo = (id) => {
    setTodos((todos) => {
      const result = todos.filter((todo) => todo.id !== id);
      return result;
    });
    setIsEditing(false);
  };

  const handleDeleteAll = () => {
    setTodos(() => {
      return [];
    });
    setIsEditing(false);
  };

  const handleFilterAll = (e) => {
    setFilterData((filterTodos) => {
      return {
        style: "show-all",
      };
    });
    setIsEditing(false);
  };
  const handleFilterActive = (e) => {
    setFilterData((filterTodos) => {
      return {
        style: "show-active",
        filterValue: true,
      };
    });
    setIsEditing(false);
  };

  const handleFilterCompleted = (e) => {
    setFilterData((filterTodos) => {
      return {
        style: "show-completed",
        filterValue: false,
      };
    });
    setIsEditing(false);
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
    if (currentTodo.content.trim().length === 0) {
      alert(`
    Please don't leave blank`);
    } else {
      setTodos((todos) => {
        return todos.map((todo) => {
          if (todo.id !== currentTodo.id) return todo;
          return {
            ...todo,
            content: currentTodo.content,
          };
        });
      });
    }
    setIsEditing(false);
  };
  return (
    <TodoContext.Provider
      value={{
        value,
        todos,
        currentTodo,
        filterData,
        isEditing,
        inputRef,
        handleInputChange,
        handleAddTodo,
        handleDeleteTodo,
        handleDeleteAll,
        handleFilterAll,
        handleFilterActive,
        handleFilterCompleted,
        handleCheckboxClick,
        handleEditClick,
        handleEditInputChange,
        handleUpdateClick,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
