import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useForm } from "react-hook-form";
import { updateDate, updateName } from "../../../store/FormClientes.store";

export const CadastroClientesConfirmacao = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const date = useSelector((state: RootState) => state.formClientes?.name);
  const formCliente = useSelector((state: RootState) => state.formClientes);

  const { register, handleSubmit } = useForm({ defaultValues: { name } });

  const onSubmit = handleSubmit((data) => {
    navigate("/");
  });

  useEffect(() => {
    dispatch(updateDate(new Date()));
  }, []);

  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>Confirme seus dados:</h1>
        <div>{JSON.stringify([formCliente], null, 2)}</div>
        <button>Confirmar</button>
      </form>
    </>
  );
};
