import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  placesList: [],
};

const ViewSlice = createSlice({
  name: "views",
  initialState,
  reducers: {
    searchPlaces: (state, action) => {
      return { ...state, placesList: action.payload };
    }
  },
});
const { increment} = ViewSlice.actions;
export { ViewSlice, increment };
