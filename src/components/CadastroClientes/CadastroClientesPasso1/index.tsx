import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useForm } from "react-hook-form";
import { updateName } from "../../../store/FormClientes.store";
import {
  Button,
  FormButton,
  FormClientesContainer,
  Subtitle,
} from "../../../pages/Clientes/style";

export const CadastroClientesPasso1 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useSelector((state: RootState) => state.formClientes?.name);

  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    dispatch(updateName(data.name));
    navigate("/clientes/cadastro/2");
  });
  //
  return (
    <FormClientesContainer>
      <Subtitle color="black">digite seu nome completo:</Subtitle>
      <form onSubmit={onSubmit}>
        <input
          defaultValue={name}
          placeholder={"ex: márcio andrade"}
          type="name"
          {...register("name")}
        />
        <FormButton>próximo</FormButton>
      </form>
    </FormClientesContainer>
  );
};
