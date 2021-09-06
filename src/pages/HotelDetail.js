import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchHotelDetail } from "../store/hotelDetailSlice";

const HotelDetail = () => {
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch();
  const details = useSelector((store) => store.hoteldetail);

  useEffect(() => {
    dispatch(fetchHotelDetail(id));
  }, [dispatch, id]);

  console.log(details);
  return (
    <div>
      <h1>{details.name}</h1>
    </div>
  );
};

export default HotelDetail;
