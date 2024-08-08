import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./reducers/categoryReducer";
import siteReducer from "./reducers/siteSlice";
import basketReducer from "./reducers/basketReducer";
import RegisterSlice from "./features/register/RegisterSlice";
import loginSlice from "./features/login/loginSlice";

export const store = configureStore({
  reducer: {
    categoriesList: categoryReducer,
    site: siteReducer,
    basket:basketReducer,
    userRegister:RegisterSlice,
    login:loginSlice
  },
});
