import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { useForm } from "react-hook-form";
import { updateName } from "../../store/FormClientes.store";

export const Clientes = () => {
  const navigate = useNavigate();

  const comecarCadastro = () => {
    navigate("./cadastro/1");
  };

  return (
    <>
      <h1>Clientes</h1>
      <button onClick={comecarCadastro}>Começar!</button>
    </>
  );
};
