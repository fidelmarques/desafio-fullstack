import styled from "styled-components";
import { Button } from "../../../pages/Clientes/style";

export const DeleteButton = styled(Button)`
  width: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: #bf5c5e;
    border-color: #790405;
  }
`;

export const AddButton = styled(Button)`
  :hover {
    border-color: #016b0c;
    color: white;
    background-color: #58a85e;
  }
`;
