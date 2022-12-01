import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFieldArray, useForm } from "react-hook-form";
import { updatePhone } from "../../../store/FormClientes.store";
import {
  FieldArrayContainer,
  FormButton,
  FormClientesContainer,
  Subtitle,
} from "../../../pages/Clientes/style";
import { AddButton, DeleteButton } from "../CadastroClientesPasso2/style";
import { HiTrash } from "react-icons/hi";

export const CadastroClientesPasso3 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit, control } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "phoneFields",
  });

  const onSubmit = handleSubmit((data) => {
    data.phoneFields.map((item: object) => {
      dispatch(updatePhone(Object.values(item)[0]));
    });
    navigate("/clientes/cadastro/confirmar");
  });

  return (
    <FormClientesContainer>
      <Subtitle color="black">agora, telefones para contato:</Subtitle>
      <form onSubmit={onSubmit}>
        <AddButton type="button" onClick={() => append({ phone: "" })}>
          {fields.length > 0
            ? "adicionar mais telefones"
            : "adicionar telefone"}
        </AddButton>
        {fields.map((field, index) => (
          <FieldArrayContainer key={field.id}>
            <input
              type="phone"
              placeholder={"(99) 99999-9999"}
              {...register(`phoneFields.${index}.phone`)}
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
