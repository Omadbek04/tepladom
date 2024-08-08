import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: [],
    like: [],
  },
  reducers: {
    setBasket: (state, action) => {
      state.basket = [...state.basket, action.payload];
    },
    deleteBasket: (state, action) => {
      state.basket = state.basket.filter((item) => item.id != action.payload);
    },
    setLike: (state, action) => {
      state.like = [...state.like, action.payload];
    },
    deleteLike: (state, action) => {
      state.like = state.like.filter((item) => item.id != action.payload);
    },
  },
});
export const { setBasket, setLike, deleteBasket, deleteLike } = basketSlice.actions;

export default basketSlice.reducer;
