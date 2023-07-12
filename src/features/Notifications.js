import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const NotificationsSlice = createSlice({
  name: "Notifications",
  initialState,
  reducers: {
    EnqueueNotifications: (state, action) => {
      state.value = [...state.value, action.payload];
      console.log(state.value);
    },
    DequeueNotifications: (state) => {
      state.value = state.value.slice(1);
      console.log(state.value);
    },
  },
});

export const { EnqueueNotifications, DequeueNotifications } =
  NotificationsSlice.actions;

export default NotificationsSlice.reducer;
