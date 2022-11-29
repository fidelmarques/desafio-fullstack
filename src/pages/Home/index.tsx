import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavContainer } from "./style";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavContainer>
        <button onClick={() => navigate("/clientes")}>
          Cadastro de clientes
        </button>
        <button onClick={() => navigate("/contatos")}>
          Cadastro de contatos
        </button>
      </NavContainer>
    </>
  );
};
