import { createSlice } from "@reduxjs/toolkit";
import { authAxios } from "./authSlice";
import axios from "axios";

const initialState = {
  hotels: [],
  hotelDetail: {},
  loading: null,
  error: "",
};

const hotelsSlice = createSlice({
  name: "hotels",
  initialState: initialState,
  reducers: {
    getData(state, action) {
      const { data, error } = action.payload;
      state.hotels = data;
      state.error = error;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    getHotelDetail(state, action) {
      state.hotelDetail = action.payload;
    },
    addHotel(state, action) {
      state.hotels.push(action.payload);
    },
    changeRating(state, action) {
      const index = state.hotels.findIndex(
        (item) => item.id === action.payload.hotelId
      );
      return {
        ...state,
        hotels: [
          ...state.hotels.slice(0, index),
          { ...state.hotels[index], rating: action.payload.rate },
          ...state.hotels.slice(index + 1),
        ],
        hotelDetail: { ...state.hotelDetail, rating: action.payload.rate },
      };
    },
    changeLike(state, action) {
      const index = state.hotels.findIndex(
        (item) => item.id === action.payload.hotelId
      );

      return {
        ...state,
        hotels: [
          ...state.hotels.slice(0, index),
          { ...state.hotels[index], like: action.payload.like },
          ...state.hotels.slice(index + 1),
        ],
        hotelDetail: { ...state.hotelDetail, like: action.payload.like },
      };
    },
  },
});

export default hotelsSlice;
const { getData, setLoading, setError, addHotel, getHotelDetail } =
  hotelsSlice.actions;
export const { changeRating, changeLike } = hotelsSlice.actions;

export const fetchHotelData = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      let { data } = await authAxios.get("/hotel");
      dispatch(getData({ data, error: "" }));
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(setLoading(false));
  };
};

export const fetchHotelDetail = (id) => {
  return async (dispatch) => {
    try {
      let { data } = await authAxios.get(`/hotel/${id}`);
      dispatch(getHotelDetail(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const addNewHotel = (values) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/hotel",
        values
      );
      dispatch(addHotel(data));
    } catch (err) {
      console.log("Something went wrong!");
    }
  };
};
