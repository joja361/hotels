import { configureStore } from "@reduxjs/toolkit";
import { hotelsSlice } from "./hotelsSlice";
import hotelDetailSlice from "./hotelDetailSlice";

const store = configureStore({
  reducer: {
    hotel: hotelsSlice.reducer,
    hotelDetails: hotelDetailSlice.reducer,
  },
});

export default store;
