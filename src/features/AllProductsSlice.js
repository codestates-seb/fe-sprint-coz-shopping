import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const AllProductsSlice = createSlice({
  name: "AllProducts",
  initialState,
  reducers: {
    updateAllProducts: (state, action) => {
      const result = action.payload.map((el) => (el.bookmark = false));
      state.value = action.payload;
    },
    updateBookmark: (state, action) => {
      const idx = state.value.findIndex((el) => el.id === action.payload);
      const temp = [...state.value];
      temp[idx].bookmark = !temp[idx].bookmark;
      state.value = temp;
    },
  },
});

export const { updateAllProducts, updateBookmark } = AllProductsSlice.actions;
export default AllProductsSlice.reducer;
