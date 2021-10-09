import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const token = localStorage.getItem("token");
const username = localStorage.getItem("email");

export const baseUrl = axios.create({
  baseURL: "http://localhost:8080/api",
});

export const authAxios = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const initialState = {
  token: token,
  isLoggedIn: !!token,
  username,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      localStorage.setItem("token", action.payload.id);
      localStorage.setItem("email", action.payload.email);
      return {
        token: action.payload.id,
        isLoggedIn: true,
        username: action.payload.email,
      };
    },
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      return { token: null, isLoggedIn: false, username: "" };
    },
  },
});

export default authSlice;

export const { login, logout } = authSlice.actions;
