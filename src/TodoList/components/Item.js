import styled from "styled-components";
import { ReactComponent as EditIcon } from "../images/pencil.svg";
import { useTodos } from "../hooks/useTodos";

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
const StyledButtonWrapper = styled.div`
  display: flex;
  width: 70px;
  height: 20px;
`;

const StyledEditButton = styled(EditIcon)`
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-right: 20px;
  fill: rgb(162, 162, 162);
  :hover {
    fill: #60c983;
    transition: 0.3s;
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
    width: 20px;
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

function Item({ todo }) {
  const { id, isDone, content } = todo;
  const { handleDeleteTodo, handleCheckboxClick, handleEditClick } = useTodos();
  const deleteClick = () => {
    handleDeleteTodo(id);
  };
  const checkboxClick = () => {
    handleCheckboxClick(id);
  };
  const editClick = () => {
    handleEditClick(todo);
  };
  return (
    <Todo key={id}>
      <StyledTodoItem>
        <StyledLabel>
          <StyledInputCheckbox
            onClick={checkboxClick}
            type="checkbox"
            defaultChecked={isDone}
          />
          <span>{content}</span>
        </StyledLabel>
      </StyledTodoItem>
      <StyledButtonWrapper>
        <StyledEditButton onClick={editClick} />
        <StyledDeleteButton onClick={deleteClick} />
      </StyledButtonWrapper>
    </Todo>
  );
}

export default Item;
