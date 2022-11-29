import { createSlice } from "@reduxjs/toolkit";

const formContatosSlice = createSlice({
  name: "formContatos",
  initialState: { name: "", email: "", phone: "" },
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updatePhone: (state, action) => {
      state.phone = action.payload;
    },
  },
});

export const formContatosReducer = formContatosSlice.reducer;

export const { updateName, updateEmail, updatePhone } =
  formContatosSlice.actions;
