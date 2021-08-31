import { configureStore, createSlice } from "@reduxjs/toolkit";

const hotelsSlice = createSlice({
  name: "hotels",
  initialState: [],
  reducers: {
    setData(state, action) {
      return (state = action.payload);
    },
  },
});

const store = configureStore(hotelsSlice);

export default store;

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
      dispatch(hotelsSlice.actions.setData(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};
