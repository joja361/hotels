import { configureStore, createSlice } from "@reduxjs/toolkit";
import { hotelsDetails } from "./dummyData";

const hotels = createSlice({
  name: "hotels",
  initialState: hotelsDetails,
  reducers: {
    onLike() {
      console.log("likic");
    },
  },
});

const store = configureStore({
  reducer: {
    hotels,
  },
});

export const HotelsAction = hotels.actions;

export default store;
