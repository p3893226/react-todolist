import styled from "styled-components";
import Item from "./Item";

const ListWrapper = styled.div``;

const FilterButton = styled.button`
  cursor: pointer;
  border: 1px solid rgb(214, 214, 214);
  color: rgb(75, 75, 75);
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

const RedFilterButton = styled(FilterButton)`
&:hover {
  color: #bb001c;
`;

function List({ todos, setTodos, filterTodos, setFilterTodos }) {
  const handleDeleteAll = () => {
    setTodos(() => {
      return [];
    });
  };

  return (
    <>
      <ListWrapper>
        <FilterButton
          onClick={() => {
            setFilterTodos(null);
          }}
        >
          ALL
        </FilterButton>
        <FilterButton
          onClick={() => {
            setFilterTodos(true);
          }}
        >
          Active
        </FilterButton>
        <FilterButton
          onClick={() => {
            setFilterTodos(false);
          }}
        >
          Done
        </FilterButton>
        <RedFilterButton onClick={handleDeleteAll}>Delete All</RedFilterButton>
      </ListWrapper>
      {todos
        .filter((todo) => {
          return todo.isDone !== filterTodos;
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
