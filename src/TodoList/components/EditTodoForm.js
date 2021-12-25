import styled from "styled-components";
import { ReactComponent as UpdateIcon } from "../images/refresh.svg";

const StyledTodoInput = styled.input`
  border-radius: 10px;
  padding: 5px 15px;
  border: 1px solid rgb(167, 166, 166);
  font-size: 130%;
  line-height: 1.15;
  min-width: 200px;

  &::placeholder {
    color: rgb(150, 150, 150);
    font-weight: 50;
  }
`;

const StyledInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledUpdate = styled(UpdateIcon)`
  cursor: pointer;
  padding-top: 3px;
  max-width: 30px;
  max-height: 30px;
  margin: 0px 10px;
  fill: #a2a2a2;
  :hover {
    transform: rotate(-135deg);
    transition: all 0.5s ease;
  }
`;

const StyledDivider = styled.div`
  max-width: 500px;
  height: 1px;
  background-color: rgb(235, 235, 235);
  margin: 8px auto;
`;

function EditTodoForm({
  currentTodo,
  handleEditInputChange,
  handleUpdateClick,
}) {
  const updateClick = () => {
    handleUpdateClick(currentTodo);
  };
  const enterKeyPress = (e) => {
    if (e.key === "Enter") {
      handleUpdateClick(currentTodo);
    }
  };
  return (
    <>
      <StyledInputWrapper>
        <StyledTodoInput
          value={currentTodo.content}
          onChange={handleEditInputChange}
          onKeyPress={enterKeyPress}
          type="text"
          placeholder="Add New Todo Here..."
          size="30"
        />
        <StyledUpdate onClick={updateClick} />
      </StyledInputWrapper>
      <StyledDivider />
    </>
  );
}

export default EditTodoForm;
