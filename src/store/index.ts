import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { formClientesReducer } from "./FormClientes.store";
import { formContatosReducer } from "./FormContatos.store";

const rootReducer = combineReducers({
  formClientes: formClientesReducer,
  formContatos: formContatosReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;
