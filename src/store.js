import { configureStore } from "@reduxjs/toolkit";
import AllProductsReducer from "./features/AllProductsSlice";
import LodingReducer from "./features/Loding";
import NotificationsRuducer from "./features/Notifications";
export const store = configureStore({
  reducer: {
    AllProducts: AllProductsReducer,
    Loding: LodingReducer,
    Notifications: NotificationsRuducer,
  },
});
