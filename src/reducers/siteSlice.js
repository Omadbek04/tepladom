import { createSlice } from "@reduxjs/toolkit";

const siteSlice = createSlice({
  name: "site",
  initialState: {
    product: [],
    ctList: [],
    filter: [],
  },
  reducers: {
    getProduct: (state, action) => {
      state.product = action.payload;
    },
    getCategories: (state, action) => {
      state.ctList = state.product.filter((c) => c.categoryId == action.payload);
    },
    getFilter: (state, action) => {
      state.filter = state.product.filter((item) => item.categoryId == action.payload);
    },
  },
});

export const { getCategories, getFilter } = siteSlice.actions;

export default siteSlice.reducer;

export function getProduct() {
  return async function (dispatch) {
    const response = await fetch(`https://online-json-server-api.up.railway.app/project/66b4aedd340dd55056fb5a7c/products`);
    try {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      dispatch({ type: "site/getProduct", payload: data.data });
    } catch (error) {
      console.log(error);
    }
  };
}
