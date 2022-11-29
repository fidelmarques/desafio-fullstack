import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { formClientesReducer } from "./FormClientes.store";
import { formContatosReducer } from "./FormContatos.store";

export const rootReducer = combineReducers({
  formClientes: formClientesReducer,
  formContatos: formContatosReducer,
});

const store = configureStore({
  reducer: {
    formClientes: formClientesReducer,
    formContatos: formContatosReducer,
  },
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;
