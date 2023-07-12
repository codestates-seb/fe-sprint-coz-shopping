import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
  curItem: { img: null, title: null, bookmark: null },
};

export const ModalSlice = createSlice({
  name: "Modal",
  initialState,
  reducers: {
    updateModal: (state, action) => {
      state.value = !state.value;
      if (action.payload) {
        state.curItem.img = action.payload.img;
        state.curItem.title = action.payload.title;
        state.curItem.bookmark = action.payload.bookmark;
        state.curItem.id = action.payload.id;
      }
    },
    updateModalBookmark: (state, action) => {
      if (action.payload) {
        state.curItem.img = action.payload.img;
        state.curItem.title = action.payload.title;
        state.curItem.bookmark = action.payload.bookmark;
        state.curItem.id = action.payload.id;
      }
    },
  },
});

export const { updateModal, updateModalBookmark } = ModalSlice.actions;

export default ModalSlice.reducer;
