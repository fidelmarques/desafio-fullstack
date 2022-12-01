import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useForm } from "react-hook-form";
import {
  resetData,
  updateDate,
  updateName,
} from "../../../store/FormClientes.store";
import {
  Button,
  FormClientesContainer,
  Subtitle,
} from "../../../pages/Clientes/style";
import { DataContainer, InfoContainer } from "./style";

export const CadastroClientesConfirmacao = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const date = useSelector((state: RootState) => state.formClientes?.name);
  const { name, emailFields, phoneFields } = useSelector(
    (state: RootState) => state.formClientes
  );

  const { register, handleSubmit } = useForm({ defaultValues: { name } });

  const onSubmit = handleSubmit((data) => {
    resetData();
    navigate("/");
  });

  useEffect(() => {
    dispatch(updateDate(new Date()));
  }, []);

  return (
    <FormClientesContainer>
      <Subtitle color="black">confira seus dados:</Subtitle>
      <DataContainer>
        <span>nome:</span>
        <InfoContainer>
          <span>{name}</span>
        </InfoContainer>
      </DataContainer>

      <DataContainer>
        <span>{emailFields.length > 1 ? "emails:" : "email:"}</span>
        <InfoContainer>
          {emailFields.map((item) => (
            <span>{item}</span>
          ))}
        </InfoContainer>
      </DataContainer>

      <DataContainer>
        <span>{phoneFields.length > 1 ? "telefones:" : "telefone:"}</span>
        <InfoContainer>
          {phoneFields.map((item) => (
            <span>{item}</span>
          ))}
        </InfoContainer>
      </DataContainer>
      <form onSubmit={onSubmit}>
        <Button>confirmar</Button>
      </form>
    </FormClientesContainer>
  );
};
