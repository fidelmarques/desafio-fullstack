import styled from "styled-components";
import bgImg from "../../assets/bg.jpg";
import { Button, Subtitle } from "../Clientes/style";

export const Main = styled.main`
  background-image: url(${bgImg});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const NavContainer = styled.nav`
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;
`;

export const Intro = styled(Subtitle)`
  text-shadow: 2px 2px 4px #181818;
  line-height: 1.3;
`;

export const HomeButton = styled(Button)`
  width: 100%;
`;
