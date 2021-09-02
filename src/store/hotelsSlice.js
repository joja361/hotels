import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hotels: [],
  error: "",
};

export const hotelsSlice = createSlice({
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
    getComment(state, acition) {
      console.log(acition.payload);
    },
  },
});

export const fetchHotelData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/api/hotel");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      return responseData;
    };

    try {
      const data = await fetchData();
      dispatch(hotelsSlice.actions.getData({ data, error: "" }));
    } catch (error) {
      dispatch(hotelsSlice.actions.setError(error.message));
    }
  };
};

