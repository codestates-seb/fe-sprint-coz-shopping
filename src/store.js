import { configureStore } from "@reduxjs/toolkit";
import AllProductsReducer from "./features/AllProductsSlice";
import LodingReducer from "./features/Loding";
import NotificationsRuducer from "./features/Notifications";
import ModalReducer from "./features/Modal";
export const store = configureStore({
  reducer: {
    AllProducts: AllProductsReducer,
    Loding: LodingReducer,
    Notifications: NotificationsRuducer,
    Modal: ModalReducer,
  },
});
