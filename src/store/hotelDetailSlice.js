import { createSlice } from "@reduxjs/toolkit";

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
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8080/api/hotel/${id}`);

      if (!response.ok) {
        throw new Error("Hotel Detail not found!");
      }

      const responseData = await response.json();
      
      return responseData;
    };

    try {
      const data = await fetchData();
      dispatch(hotelDetailSlice.actions.getHotelDetail(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};
