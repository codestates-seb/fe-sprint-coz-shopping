import { configureStore } from "@reduxjs/toolkit";
import AllProductsReducer from "./features/AllProductsSlice";
import LodingReducer from "./features/Loding";
export const store = configureStore({
  reducer: {
    AllProducts: AllProductsReducer,
    Loding: LodingReducer,
  },
});
