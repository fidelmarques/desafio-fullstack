import { useNavigate } from "react-router-dom";
import { Button, FormButton, FormClientesContainer, Subtitle } from "./style";

export const Clientes = () => {
  const navigate = useNavigate();

  const comecarCadastro = () => {
    navigate("./cadastro/1");
  };

  return (
    <FormClientesContainer>
      <Subtitle color="black">seja bem vindo, novo cliente!</Subtitle>
      <FormButton onClick={comecarCadastro}>iniciar cadastro</FormButton>
    </FormClientesContainer>
  );
};
