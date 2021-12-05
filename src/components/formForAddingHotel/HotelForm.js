import { Formik } from "formik";
import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import * as Yup from "yup";
import { addNewHotel } from "../../store/hotelsSlice";
import InputField from "../loginForm/InputField";
import TextField from "../loginForm/TextField";

const HotelForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    city: "",
    price: "",
    img: "",
    description: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    img: Yup.string().required("Required"),
    price: Yup.number().required("Required"),
  });

  const onSubmit = async (values) => {
    dispatch(addNewHotel(values));
    history.push("/admin/dashboard");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => {
        return (
          <Container>
            <Form style={{ marginTop: "20vh" }} onSubmit={handleSubmit}>
              <InputField label="Hotel Name" type="text" name="name" inline />
              <InputField label="City" type="text" name="city" inline />
              <TextField label="Description" name="description" inline />
              <InputField label="Image Link" name="img" type="text" inline />
              <InputField label="Price" name="price" type="number" inline />
              <Button
                type="submit"
                className="w-50 d-block mx-auto mt-4"
                onClick={handleSubmit}
              >
                Add Hotel
              </Button>
            </Form>
          </Container>
        );
      }}
    </Formik>
  );
};

export default HotelForm;
