import AddTodoForm from "./components/AddTodoForm";
import EditTodoForm from "./components/EditTodoForm";
import List from "./components/List";
import styled from "styled-components";
import useTodos from "./hooks/useTodos";

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
  const {
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
    handleFilterData,
    handleCheckboxClick,
    handleEditClick,
    handleEditInputChange,
    handleUpdateClick,
  } = useTodos();

  return (
    <StyledFormwrapper>
      <StyledTitle>Todo-List</StyledTitle>
      {isEditing ? (
        <EditTodoForm
          currentTodo={currentTodo}
          handleEditInputChange={handleEditInputChange}
          handleUpdateClick={handleUpdateClick}
          inputRef={inputRef}
        />
      ) : (
        <AddTodoForm
          value={value}
          handleInputChange={handleInputChange}
          handleAddTodo={handleAddTodo}
        />
      )}
      <List
        todos={todos}
        filterData={filterData}
        handleFilterData={handleFilterData}
        handleDeleteAll={handleDeleteAll}
        handleDeleteTodo={handleDeleteTodo}
        handleCheckboxClick={handleCheckboxClick}
        handleEditClick={handleEditClick}
      />
    </StyledFormwrapper>
  );
}

export default TodoList;
