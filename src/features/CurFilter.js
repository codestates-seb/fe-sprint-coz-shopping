import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { Products: "All", Bookmark: "All", CurPage: "Main" },
};

export const CurFilterSlice = createSlice({
  name: "CurFilter",
  initialState,
  reducers: {
    updateProductsCurFilter: (state, action) => {
      state.value.Products = action.payload;
      console.log(action.payload);
    },
    updateBookmarkCurFilter: (state, action) => {
      state.value.Bookmark = action.payload;
      console.log(action.payload);
    },
    updateCurPage: (state, action) => {
      state.value.CurPage = action.payload;
      console.log(state.value.CurPage);
    },
  },
});

export const {
  updateProductsCurFilter,
  updateBookmarkCurFilter,
  updateCurPage,
} = CurFilterSlice.actions;
export default CurFilterSlice.reducer;
