import { createSlice } from "@reduxjs/toolkit";

const formClientesSlice = createSlice({
  name: "formClientes",
  initialState: { name: "", emailFields: [], phoneFields: [], date: "" },
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateEmail: (state, action) => {
      state.emailFields = action.payload;
    },
    updatePhone: (state, action) => {
      state.phoneFields = action.payload;
    },
    updateDate: (state, action) => {
      state.date = action.payload;
    },
  },
});

export const formClientesReducer = formClientesSlice.reducer;

export const { updateName, updateEmail, updatePhone, updateDate } =
  formClientesSlice.actions;
