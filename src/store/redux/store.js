import { configureStore } from "@reduxjs/toolkit";
import favSlice from "./reducer/favorites";

export const store = configureStore({
  reducer: {
    favoritesUsers: favSlice,
  },
});
