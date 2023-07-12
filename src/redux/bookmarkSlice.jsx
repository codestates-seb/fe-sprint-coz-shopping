import { createSlice } from "@reduxjs/toolkit";

export const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState: [],
  reducers: {
    add: (state, action) => {
      return [...state, action.payload.id];
    },

    remove: (state, action) => {
      return [...state.filter((item) => item.id != action.payload.id)];
    },
  },
});

export const { add, remove } = todoSlice.actions;
export default todoSlice.reducer;
