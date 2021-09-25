import { createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  hotels: [],
  error: "",
  loading: null,
};

const hotelsSlice = createSlice({
  name: "hotels",
  initialState: initialState,
  reducers: {
    getData(state, action) {
      state.hotels = action.payload.data;
      state.error = action.payload.error;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
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
      };
    },
  },
});

export default hotelsSlice;
const { getData, setLoading, setError } = hotelsSlice.actions;
export const { changeRating } = hotelsSlice.actions;

export const fetchHotelData = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    await axios //check is there better solution
      .get("http://localhost:8080/api/hotel")
      .then(({ data }) => dispatch(getData({ data, error: "" })))
      .catch((err) => {
        dispatch(setError(err.message));
      });
    dispatch(setLoading(false));
  };
};
