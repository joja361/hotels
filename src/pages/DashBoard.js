import Layout from "../components/layout/Layout";
import HotelsList from "../components/hotels/HotelsList";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import classes from "./DashBoard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotelData } from "../store/hotelsSlice";

const DashBoard = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);

  const fetchData = () => {
    dispatch(fetchHotelData());
  };

  return (
    <Layout>
      <Card>
        <Button title="Load Hotels" onClick={fetchData} />
        {error ? <h1 className={classes.error}>{error}</h1> : <HotelsList />}
      </Card>
    </Layout>
  );
};

export default DashBoard;
