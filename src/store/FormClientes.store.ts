import { createSlice } from "@reduxjs/toolkit";

interface IFormClientes {
  name: string;
  emailFields: string[];
  phoneFields: string[];
  date?: Date;
}

const initialState = <IFormClientes>{
  name: "",
  emailFields: [],
  phoneFields: [],
};

const formClientesSlice = createSlice({
  name: "formClientes",
  initialState,
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
    resetData: () => initialState,
  },
});

export const formClientesReducer = formClientesSlice.reducer;

export const { updateName, updateEmail, updatePhone, updateDate, resetData } =
  formClientesSlice.actions;
