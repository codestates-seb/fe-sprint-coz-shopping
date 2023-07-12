import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

export const LodingSlice = createSlice({
  name: "Loding",
  initialState,
  reducers: {
    updateLoding: (state, action) => {
      state.value = action.payload;
      console.log(action.payload);
    },
  },
});

export const { updateLoding } = LodingSlice.actions;
export default LodingSlice.reducer;
