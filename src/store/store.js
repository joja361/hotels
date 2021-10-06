import { configureStore } from "@reduxjs/toolkit";
import hotelsSlice from "./hotelsSlice";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    hotel: hotelsSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
