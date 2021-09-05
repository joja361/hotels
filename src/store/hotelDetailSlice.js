import { createSlice } from "@reduxjs/toolkit";

export const hotelDetailSlice = createSlice({
  name: "hotelDetail",
  initialState: {},
  reducers: {
    getHotelDetails(state, action) {
      const detail = action.payload[0];
      state = detail;
    },
  },
});

export const fetchHotelDetail = (id) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/api/hotel");

      if (!response.ok) {
        throw new Error("Hotel data not found");
      }

      const responseData = await response.json();

      return responseData.filter((data) => data.id === id);
    };

    try {
      const data = await fetchData();
      dispatch(hotelDetailSlice.actions.getHotelDetails(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};
