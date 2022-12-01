import { useNavigate } from "react-router-dom";
import { HeaderContainer, Title } from "./style";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <Title onClick={() => navigate("/")}>on touch.</Title>
    </HeaderContainer>
  );
};
