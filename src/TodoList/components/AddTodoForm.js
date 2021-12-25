import styled from "styled-components";

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

const StyledButton = styled.button`
  cursor: pointer;
  border: 1px solid rgb(214, 214, 214);
  outline: none;
  background: transparent;
  min-width: 30px;
  min-height: 30px;
  border-radius: 50%;
  margin: 0px 10px;

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
    background: #60c983;
    transition: 0.3s;
  }

  :before {
    transform: translate(-50%, -50%);
  }

  :after {
    transform: translate(-50%, -50%) rotate(90deg);
  }
`;

const StyledDivider = styled.div`
  max-width: 500px;
  height: 1px;
  background-color: rgb(235, 235, 235);
  margin: 8px auto;
`;

function AddTodoForm({ value, handleAddTodo, handleInputChange }) {
  const enterKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };
  return (
    <>
      <StyledInputWrapper>
        <StyledTodoInput
          value={value}
          onChange={handleInputChange}
          onKeyPress={enterKeyPress}
          type="text"
          placeholder="Add New Todo Here..."
          size="30"
        />
        <StyledButton onClick={handleAddTodo} />
      </StyledInputWrapper>
      <StyledDivider />
    </>
  );
}

export default AddTodoForm;
