import { createSlice } from "@reduxjs/toolkit";

const categoriesReducer = createSlice({
  name: "list",
  initialState: {
    list: null,
    ctList: [],
  },
  reducers: {
    getUser: (state, action) => {
      state.list = action.payload;
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
    const response = await fetch(`https://4d78fe3c0a149260.mokky.dev/category`);
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
