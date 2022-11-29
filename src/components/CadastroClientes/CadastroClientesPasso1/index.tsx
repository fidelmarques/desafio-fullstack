import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useForm } from "react-hook-form";
import { updateName } from "../../../store/FormClientes.store";

export const CadastroClientesPasso1 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useSelector((state: RootState) => state.formClientes?.name);

  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data.name);
    dispatch(updateName(data.name));
    navigate("/clientes/cadastro/2");
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Nome completo:</label>
          <input type="name" {...register("name")} />
        </div>
        <button>Próximo</button>
      </form>
    </>
  );
};
