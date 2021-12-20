import styled from "styled-components";
import Item from "./Item";

const ListWrapper = styled.div``;

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

function List({ todos, setTodos, filterTodos, setFilterTodos }) {
  const handleFilterValue = (e) => {
    const { classList } = e.target;
    console.log(classList);
    if (!classList.contains("button-switch")) return;
    setFilterTodos((filterTodos) => {
      if (classList.contains("show-all")) {
        return {
          style: "show-all",
          filterValue: null,
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

  const handleDeleteAll = () => {
    setTodos(() => {
      return [];
    });
  };

  return (
    <>
      <ListWrapper onClick={handleFilterValue}>
        <FilterAllButton
          filterFocus={filterTodos.style}
          className="show-all button-switch"
        >
          ALL
        </FilterAllButton>
        <FilterActiveButton
          filterFocus={filterTodos.style}
          className="show-active button-switch"
        >
          Active
        </FilterActiveButton>
        <FilterCompletedButton
          filterFocus={filterTodos.style}
          className="show-completed button-switch"
        >
          Done
        </FilterCompletedButton>
        <RedFilterButton onClick={handleDeleteAll}>Delete All</RedFilterButton>
      </ListWrapper>
      {todos
        .filter((todo) => {
          return todo.isDone !== filterTodos.filterValue;
        })
        .map((todo) => {
          const { id, isDone, content } = todo;
          return (
            <Item
              key={id}
              id={id}
              isDone={isDone}
              content={content}
              todos={todos}
              setTodos={setTodos}
            />
          );
        })}
    </>
  );
}

export default List;
