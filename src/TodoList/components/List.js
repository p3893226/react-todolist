import styled from "styled-components";
import Item from "./Item";
import { useTodos } from "../hooks/useTodos";

const ListWrapper = styled.div`
  display: flex;
`;

const FilterAllButton = styled.button`
  cursor: pointer;
  border: ${(props) =>
    props.filterFocus === "show-all"
      ? "transparent;"
      : "1px solid rgb(214, 214, 214);"}
  color: ${(props) =>
    props.filterFocus === "show-all" ? "#60c983;" : "rgb(75, 75, 75);"}
  outline: none;
  background: transparent;
  width: 100%;
  max-width: 75px;
  height: 2rem;
  border-radius: 10%;

  & + & {
    margin-left: 8px;
  }

  &:hover {
    color: #60c983;
    border: 1px solid transparent;
    transform: scale(1.2);
    transition: all 0.2s ease-in-out;
  }
`;

const FilterActiveButton = styled(FilterAllButton)`
  border: ${(props) =>
    props.filterFocus === "show-active"
      ? "transparent;"
      : "1px solid rgb(214, 214, 214);"}
  color: ${(props) =>
    props.filterFocus === "show-active" ? "#60c983;" : "rgb(75, 75, 75);"}
`;

const FilterCompletedButton = styled(FilterAllButton)`
  border: ${(props) =>
    props.filterFocus === "show-completed"
      ? "transparent;"
      : "1px solid rgb(214, 214, 214);"}
  color: ${(props) =>
    props.filterFocus === "show-completed" ? "#60c983;" : "rgb(75, 75, 75);"}
`;

const RedFilterButton = styled(FilterAllButton)`
  &:hover {
    color: #bb001c;
`;

function List() {
  const {
    todos,
    filterData,
    handleFilterAll,
    handleFilterActive,
    handleFilterCompleted,
    handleDeleteAll,
    handleDeleteTodo,
    handleCheckboxClick,
    handleEditClick,
  } = useTodos();

  const todoListItems = todos
    .filter((todo) => {
      return todo.isDone !== filterData.filterValue;
    })
    .map((todo) => {
      return (
        <Item
          key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleCheckboxClick={handleCheckboxClick}
          handleEditClick={handleEditClick}
        />
      );
    });

  return (
    <>
      <ListWrapper>
        <FilterAllButton
          onClick={handleFilterAll}
          filterFocus={filterData.style}
        >
          ALL
        </FilterAllButton>
        <FilterActiveButton
          onClick={handleFilterActive}
          filterFocus={filterData.style}
        >
          Active
        </FilterActiveButton>
        <FilterCompletedButton
          onClick={handleFilterCompleted}
          filterFocus={filterData.style}
        >
          Done
        </FilterCompletedButton>
        <RedFilterButton onClick={handleDeleteAll}>Delete All</RedFilterButton>
      </ListWrapper>
      {todoListItems}
    </>
  );
}

export default List;
