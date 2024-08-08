import { createSlice } from "@reduxjs/toolkit";

const categoriesReducer = createSlice({
  name: "list",
  initialState: {
    list: null,
    ctList: [],
  },
  reducers: {
    getUser: (state, action) => {
      state.list = action.payload.data;
    },
    getCategories: (state, action) => {
      state.ctList = state.list.filter((c) => c.categoryId === action.payload);
    },
  },
});

export const { getCategories } = categoriesReducer.actions;

export default categoriesReducer.reducer;

export function getUser() {
  return async function (dispatch) {
    const response = await fetch(`https://online-json-server-api.up.railway.app/project/66b4aedd340dd55056fb5a7c/list`);
    try {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      dispatch({ type: "list/getUser", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
}