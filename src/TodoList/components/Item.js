import styled from "styled-components";

const Todo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2px 0px;

  &:hover {
    background-color: rgb(218, 218, 218);
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
  }
`;

const StyledLabel = styled.label``;

const StyledTodoItem = styled.div`
  margin: 5px;
  padding: 5px 10px;

  & span {
    margin: 0px 10px;
    font-size: normal;
    color: rgb(75, 75, 75);
  }
`;

const StyledInputCheckbox = styled.input`
  margin-right: 10px;

  &:checked + span {
    text-decoration: line-through;
    color: grey;
  }
`;

const StyledDeleteButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: transparent;
  outline: none;
  border: 0px solid rgb(214, 214, 214);
  cursor: pointer;
  margin-right: 10px;

  &:after,
  &:before {
    content: "";
    background: rgb(162, 162, 162);
    width: 16px;
    height: 1px;
    position: absolute;
  }

  &:hover:after,
  :hover:before {
    background: #bb001c;
    transition: 0.3s;
  }

  :before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  :after {
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;

function Item({ id, isDone, content, setTodos }) {
  const handleCheckboxClick = (e) => {
    setTodos((todos) => {
      return todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          isDone: !isDone,
        };
      });
    });
  };

  const handleDeleteClick = () => {
    setTodos((todos) => {
      const result = todos.filter((todo) => todo.id !== id);
      return result;
    });
  };

  return (
    <Todo key={id}>
      <StyledTodoItem onClick={handleCheckboxClick}>
        <StyledLabel>
          <StyledInputCheckbox type="checkbox" defaultChecked={isDone} />
          <span>{content}</span>
        </StyledLabel>
      </StyledTodoItem>
      <StyledDeleteButton onClick={handleDeleteClick} />
    </Todo>
  );
}

export default Item;
