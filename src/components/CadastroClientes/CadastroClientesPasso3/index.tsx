import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useFieldArray, useForm } from "react-hook-form";
import { updateName, updatePhone } from "../../../store/FormClientes.store";

export const CadastroClientesPasso3 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit, control } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "phoneFields",
  });

  const onSubmit = handleSubmit((data) => {
    dispatch(updatePhone(data.phoneFields));
    navigate("/clientes/cadastro/confirmar");
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <button type="button" onClick={() => append({ phone: "" })}>
            Adicionar telefone
          </button>
        </div>
        <div>
          {fields.map((field, index) => (
            <section key={field.id}>
              <label>
                <label htmlFor="name">Telefone:</label>
                <input
                  type="phone"
                  {...register(`phoneFields.${index}.phone`)}
                />
              </label>
              <button type="button" onClick={() => remove(index)}>
                Delete
              </button>
            </section>
          ))}
        </div>

        <button>Próximo</button>
      </form>
    </>
  );
};
