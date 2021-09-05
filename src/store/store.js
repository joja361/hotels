import { configureStore } from "@reduxjs/toolkit";
import { hotelsSlice } from "./hotelsSlice";
import { hotelDetailSlice } from "./hotelDetailSlice";

const store = configureStore({
  reducer: {
    hotel: hotelsSlice.reducer,
    hoteldetail: hotelDetailSlice.reducer,
  },
});

export default store;
