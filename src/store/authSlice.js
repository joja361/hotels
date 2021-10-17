import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import jwt_decode from "jwt-decode";

export const token = localStorage.getItem("token");

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
  token,
  username: "",
  role: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const { token } = action.payload;
      const decoded = jwt_decode(token);
      localStorage.setItem("token", token);
      return {
        token,
        username: decoded.email,
        role: decoded.role,
      };
    },
    logout() {
      localStorage.removeItem("token");
      return { token: null, username: "", role: "" };
    },
  },
});

export default authSlice;

export const roleOfUser = (store) => store.auth.role;

export const { login, logout } = authSlice.actions;
