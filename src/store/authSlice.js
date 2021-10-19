import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("token");
const username = localStorage.getItem("username");
const role = localStorage.getItem("role");

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
  username,
  role,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const { token, email, role } = action.payload;
      localStorage.setItem("token", token);
      localStorage.setItem("username", email);
      localStorage.setItem("role", role);
      return {
        token,
        username: email,
        role,
      };
    },
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("role");
      return { token: null, username: "", role: "" };
    },
  },
});

export default authSlice;

export const roleOfUser = (store) => store.auth.role;

export const { login, logout } = authSlice.actions;
