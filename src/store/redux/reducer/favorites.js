import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: "FavUsers",
  initialState: {
    ids: [],
  },
  reducers: {
    addFav: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFav: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});
export const addFavUsers = favSlice.actions.addFav;
export const removeFavUsers = favSlice.actions.removeFav;
export default favSlice.reducer;
