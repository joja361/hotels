import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import HotelItem from "../components/hotels/HotelItem";
import Layout from "../components/layout/Layout";
import { fetchHotelDetail } from "../store/hotelsSlice";
import { Container } from "react-bootstrap";

const HotelDetail = () => {
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch();
  const hotel = useSelector((store) => store.hotel.hotelDetail);

  useEffect(() => {
    dispatch(fetchHotelDetail(id));
  }, [dispatch, id]);

  return (
    <Layout>
      <Container className="mt-2">
        <h1 className="display-4">User view</h1>
        <HotelItem hotel={hotel} detailPage={false} />
      </Container>
    </Layout>
  );
};

export default HotelDetail;
