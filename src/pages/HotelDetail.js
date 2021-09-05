import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchHotelDetail } from "../store/hotelDetailSlice";

const HotelDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const hotels = useSelector((store) => store.hoteldetail);
  console.log(hotels);

  useEffect(() => {
    dispatch(fetchHotelDetail(params.id));
  }, [dispatch, params]);

  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  );
};

export default HotelDetail;
