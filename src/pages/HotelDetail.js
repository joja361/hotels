import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import HotelItem from "../components/hotels/HotelItem";
import Layout from "../components/layout/Layout";
import classes from "./HotelDetail.module.css";
import { fetchHotelDetail } from "../store/hotelDetailSlice";

const HotelDetail = () => {
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch();
  const details = useSelector((store) => store.hotelDetails);

  useEffect(() => {
    dispatch(fetchHotelDetail(id));
  }, [dispatch, id]);

  return (
    <Layout>
      <div className={classes.hotel_detail}>
        <h1>User view</h1>
        <HotelItem hotel={details} detailPage={false} />
      </div>
    </Layout>
  );
};

export default HotelDetail;
