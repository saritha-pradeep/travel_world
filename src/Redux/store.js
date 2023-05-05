import { configureStore } from "@reduxjs/toolkit";
import { HomeSlice } from "../Screens/Home/reducer";
import { ViewSlice } from "../Screens/Views/reducer";

export const store = configureStore({
  reducer: {
    HomeReducer: HomeSlice.reducer,
    ViewReducer:ViewSlice.reducer
  },
});
