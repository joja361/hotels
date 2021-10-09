import { createSlice } from "@reduxjs/toolkit";
import { authAxios } from "./authSlice";

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
      state.hotels = action.payload.data;
      state.error = action.payload.error;
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
const { getData, setLoading, setError } = hotelsSlice.actions;
export const { changeRating, changeLike } = hotelsSlice.actions;

export const fetchHotelData = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    await authAxios
      .get("/hotel")
      .then(({ data }) => dispatch(getData({ data, error: "" })))
      .catch((err) => {
        dispatch(setError(err.message));
      });
    dispatch(setLoading(false));
  };
};

export const fetchHotelDetail = (id) => {
  return async (dispatch) => {
    await authAxios
      .get(`/hotel/${id}`)
      .then(({ data }) => dispatch(hotelsSlice.actions.getHotelDetail(data)))
      .catch((err) => console.log(err.message));
  };
};
