import styled from "styled-components";

export const FormClientesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 10px;
  height: calc(100% - 40px);
  gap: 40px;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    input {
      border: 2px solid grey;
      width: 80%;
      max-width: 400px;
      padding: 5px 10px;
      text-align: center;
      border-radius: 15px;

      :focus {
        border-color: black;
      }
    }
  }
`;

export const FieldArrayContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const Subtitle = styled.h2`
  font-family: "Mier", sans-serif;
  font-size: 2em;
  text-align: left;
  color: ${(props) => props.color || "white"};
`;

export const Button = styled.button`
  background-color: white;
  border: 2px solid black;
  padding: 5px 10px;
  text-align: center;

  border-radius: 32px;

  width: 60%;
  max-width: 400px;

  cursor: pointer;

  :hover {
    background-color: black;
    color: white;
  }

  box-shadow: 2px 2px 10px #181818;
`;

export const FormButton = styled(Button)`
  :hover {
    background-color: #1573bd;
    border-color: #125d77;
  }
`;
