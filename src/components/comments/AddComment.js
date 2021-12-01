import { Formik } from "formik";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Avatar from "../UI/Avatar";

const AddComment = () => {
  const username = useSelector((state) => state.auth.username);

  const initialValues = {
    comment: "",
  };

  const onSubmit = (values) => {
    console.log(values);
    initialValues.comment = "";
  };

  TODO: "you need to reset textarea when add comment button is clicked";

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit, handleChange, values }) => (
        <>
          <Row xs={2} className="mb-2 justify-content-center">
            <Col
              xs={1}
              className="d-flex justify-content-end align-items-start pe-2"
            >
              <Avatar />
            </Col>
            <Col xs={10}>
              <Form>
                <Form.Label>{username}</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="comment"
                  onChange={handleChange}
                  values={values.comment}
                />
              </Form>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={11} className="d-flex justify-content-end">
              <Button
                onClick={handleSubmit}
                className="shadow-none w-auto"
                disabled={values.comment === ""}
              >
                Add comment
              </Button>
            </Col>
          </Row>
        </>
      )}
    </Formik>
  );
};

export default AddComment;
