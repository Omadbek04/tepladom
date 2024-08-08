import { createSlice } from "@reduxjs/toolkit";

const PlacingOrderSlice = createSlice({
  name: placingOrder,
  initialState: {
    orderUser: {
      id: "",
      count: "",
      name: "",
      region: "",
      phoneNumber: "",
      area: "",
      locality: "",
      adres: "",
    },
  },
});
