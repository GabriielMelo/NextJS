import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  background-color: white;
  border-radius: 4px;
  padding: 30px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  svg {
    margin-right: 10px;
  }
`;
export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid ${(props) => (props.error ? "#ff0000 " : "#FFF")};
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 17px;
  }
`;

// criando animação do botao

const animate = keyframes`
  from{
    transform:rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: "submit",
  disabled: props.loading,
}))`
  background-color: #0d2636;
  border: 0;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin: 0;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${animate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 20px;
  li {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    flex-direction: row;
    align-items: center;
    font-size: 18px;
    & + li {
      border-top: 1px solid #eee;
    }
    a {
      color: #0d2636;
      text-decoration: none;
    }
  }
`;

export const DeleteButton = styled.button.attrs({
  type: "button",
})`
  border: none;
  background-color: transparent;
  color: #0d2636;
  padding: 8px 7px;
`;
