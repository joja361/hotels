import { configureStore } from "@reduxjs/toolkit";
import { hotelsSlice } from "./hotelsSlice";

const store = configureStore(hotelsSlice);

export default store;