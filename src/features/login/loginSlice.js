import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loginUser: [],
};
const LoginSlise = createSlice({
  name: "login",
  initialState,
  reducers: {
    createLogin: (state,action) => {
        state.loginUser = [action.payload]
    },
  },
});
export const {createLogin} = LoginSlise.actions;

export default LoginSlise.reducer;
