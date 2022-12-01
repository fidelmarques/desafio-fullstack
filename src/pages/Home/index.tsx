import { useNavigate } from "react-router-dom";
import { HomeButton, Intro, Main, NavContainer } from "./style";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Main>
        <NavContainer>
          <Intro>tenha sempre seus contatos em mãos.</Intro>
          <HomeButton onClick={() => navigate("/clientes")}>
            cadastrar
          </HomeButton>
          <HomeButton onClick={() => navigate("/contatos")}>
            fazer login
          </HomeButton>
        </NavContainer>
      </Main>
    </>
  );
};
