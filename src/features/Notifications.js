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
    },
    DequeueNotifications: (state) => {
      state.value = state.value.slice(1);
    },
  },
});

export const { EnqueueNotifications, DequeueNotifications } =
  NotificationsSlice.actions;

export default NotificationsSlice.reducer;
