import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const AllProductsSlice = createSlice({
  name: "AllProducts",
  initialState,
  reducers: {
    updateAllProducts: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateAllProducts } = AllProductsSlice.actions;
export default AllProductsSlice.reducer;
