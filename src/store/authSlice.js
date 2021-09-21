import { createSlice } from "@reduxjs/toolkit";

const isAlreadyLoggedIn = localStorage.getItem("token");

const initialState = {
  token: isAlreadyLoggedIn,
  isLoggedIn: !!isAlreadyLoggedIn,
  username: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      localStorage.setItem("token", action.payload.id);
      return {
        token: action.payload.id,
        isLoggedIn: true,
        username: action.payload.email,
      };
    },
    logout() {
      localStorage.removeItem("token");
      return { token: null, isLoggedIn: false, username: "" };
    },
  },
});

export default authSlice;

export const { login, logout } = authSlice.actions;
