import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useFieldArray, useForm } from "react-hook-form";
import { updateEmail, updateName } from "../../../store/FormClientes.store";

export const CadastroClientesPasso2 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit, control } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "emailFields",
  });

  const onSubmit = handleSubmit((data) => {
    dispatch(updateEmail(data.emailFields));
    navigate("/clientes/cadastro/3");
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <button type="button" onClick={() => append({ email: "" })}>
            Adicionar e-mail
          </button>
        </div>
        <div>
          {fields.map((field, index) => (
            <section key={field.id}>
              <label>
                <label htmlFor="email">E-mail:</label>
                <input
                  type="email"
                  {...register(`emailFields.${index}.email`)}
                />
              </label>
              <button type="button" onClick={() => remove(index)}>
                Remover
              </button>
            </section>
          ))}
        </div>
        <button type="submit">Próximo</button>
      </form>
    </>
  );
};
