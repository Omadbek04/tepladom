import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};

const RegisterSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.user = [action.payload];
    },
  },
});
export const { createUser } = RegisterSlice.actions;

export default RegisterSlice.reducer;
