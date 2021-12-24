import AddTodoForm from "./components/AddTodoForm";
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
    filterData,
    handleInputChange,
    handleAddTodo,
    handleDeleteTodo,
    handleDeleteAll,
    handleFilterData,
    handleCheckboxClick,
  } = useTodos();

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
