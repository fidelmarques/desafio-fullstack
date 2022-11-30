import { createSlice } from "@reduxjs/toolkit";

interface IFormClientes {
  name: string;
  emailFields: string[];
  phoneFields: string[];
  date?: Date;
}

const formClientesSlice = createSlice({
  name: "formClientes",
  initialState: <IFormClientes>{
    name: "",
    emailFields: [],
    phoneFields: [],
  },
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateEmail: (state, action) => {
      state.emailFields.push(action.payload);
    },
    updatePhone: (state, action) => {
      state.phoneFields.push(action.payload);
    },
    updateDate: (state, action) => {
      state.date = action.payload;
    },
  },
});

export const formClientesReducer = formClientesSlice.reducer;

export const { updateName, updateEmail, updatePhone, updateDate } =
  formClientesSlice.actions;
