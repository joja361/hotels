import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("token");
const username = localStorage.getItem("username");
const role = localStorage.getItem("role");

export const mainAxios = axios.create({
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
  id: "",
  userDetail: {
    email: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const { token, email, role, id } = action.payload;
      localStorage.setItem("token", token);
      localStorage.setItem("username", email);
      localStorage.setItem("role", role);
      return { ...state, token, username: email, role, id };
    },
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("role");
      return {
        token: null,
        username: "",
        role: "",
        id: "",
        userDetail: { email: "" },
      };
    },
    getUserDetail(state, action) {
      state.userDetail = action.payload;
    },
  },
});

export default authSlice;

const { getUserDetail } = authSlice.actions;

export const fetchUserDetail = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await mainAxios(`user/${id}`);
      dispatch(getUserDetail(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const userRole = (store) => store.auth.role;

export const userId = (store) => store.auth.id;

export const { login, logout } = authSlice.actions;
