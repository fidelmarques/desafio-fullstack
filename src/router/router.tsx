import { Route, Routes } from "react-router-dom";
import { CadastroClientesConfirmacao } from "../components/CadastroClientes/CadastroClientesConfirmacao";
import { CadastroClientesPasso1 } from "../components/CadastroClientes/CadastroClientesPasso1";
import { CadastroClientesPasso2 } from "../components/CadastroClientes/CadastroClientesPasso2";
import { CadastroClientesPasso3 } from "../components/CadastroClientes/CadastroClientesPasso3";
import { Clientes } from "../pages/Clientes";
import { Contatos } from "../pages/Contatos";
import { Home } from "../pages/Home";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/clientes" element={<Clientes />} />
      <Route path="/clientes/cadastro/1" element={<CadastroClientesPasso1 />} />
      <Route path="/clientes/cadastro/2" element={<CadastroClientesPasso2 />} />
      <Route path="/clientes/cadastro/3" element={<CadastroClientesPasso3 />} />
      <Route
        path="/clientes/cadastro/confirmar"
        element={<CadastroClientesConfirmacao />}
      />

      <Route path="/contatos" element={<Contatos />} />
    </Routes>
  );
};
