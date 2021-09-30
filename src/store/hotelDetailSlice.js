import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { token } from "./authSlice";

const hotelDetailSlice = createSlice({
  name: "hoteldetail",
  initialState: {},
  reducers: {
    getHotelDetail(state, action) {
      return action.payload;
    },
  },
});

export default hotelDetailSlice;

export const fetchHotelDetail = (id) => {
  return async (dispatch) => {
    await axios
      .get(`http://localhost:8080/api/hotel/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) =>
        dispatch(hotelDetailSlice.actions.getHotelDetail(data))
      )
      .catch((err) => console.log(err.message)); // do I need to catch errors here since we control api
  };
};
