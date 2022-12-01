import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useFieldArray, useForm } from "react-hook-form";
import { updateEmail } from "../../../store/FormClientes.store";
import {
  FieldArrayContainer,
  FormButton,
  FormClientesContainer,
  Subtitle,
} from "../../../pages/Clientes/style";
import { AddButton, DeleteButton } from "./style";

import { HiTrash } from "react-icons/hi";

export const CadastroClientesPasso2 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const emailFields: string[] = useSelector(
    (state: RootState) => state.formClientes?.emailFields
  );

  const { register, handleSubmit, control } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "emailFields",
    rules: {
      minLength: emailFields.length,
    },
  });

  const onSubmit = handleSubmit((data) => {
    data.emailFields.map((item: object) => {
      dispatch(updateEmail(Object.values(item)[0]));
    });
    navigate("/clientes/cadastro/3");
  });

  return (
    <FormClientesContainer>
      <Subtitle color="black">escolha seus melhores emails:</Subtitle>
      <form onSubmit={onSubmit}>
        <AddButton type="button" onClick={() => append("emailFields")}>
          {fields.length > 0 ? "adicionar mais emails" : "adicionar email"}
        </AddButton>
        {fields.map((field, index) => (
          <FieldArrayContainer key={field.id}>
            <input
              defaultValue={emailFields[index]}
              type="email"
              placeholder={"ex: contato@email.com"}
              {...register(`emailFields.${index}.email` as const)}
            />
            <DeleteButton type="button" onClick={() => remove(index)}>
              <HiTrash />
            </DeleteButton>
          </FieldArrayContainer>
        ))}
        {fields.length > 0 && <FormButton>próximo</FormButton>}
      </form>
    </FormClientesContainer>
  );
};
