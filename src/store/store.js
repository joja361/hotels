import { configureStore } from "@reduxjs/toolkit";
import hotelsSlice from "./hotelsSlice";
import hotelDetailSlice from "./hotelDetailSlice";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    hotel: hotelsSlice.reducer,
    // hotelDetails: hotelDetailSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
