import { configureStore } from "@reduxjs/toolkit";
import { bookmarkSlice } from "./BookmarkSlice";

export const store = configureStore({
  reducer: bookmarkSlice,
});
