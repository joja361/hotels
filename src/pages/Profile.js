import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import Layout from "../components/layout/Layout";
import Avatar from "../components/UI/Avatar";
import { fetchUserDetail } from "../store/authSlice";

const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const email = useSelector((store) => store.auth.userDetail.email);

  useEffect(() => {
    dispatch(fetchUserDetail(id));
  }, [dispatch, id]);

  return (
    <Layout>
      <Row>
        <Col sm={4} xl={3}>
          <Avatar sizeFor="profile-avatar" />
        </Col>
        <Col sm={8}>
          <h1 className="display-6 ovo">Erol Mulahasanovic</h1>
          <p className="trirong mb-1">Muse Cazima Catica 15</p>
          <hr className="mb-4 mt-0 hr" />
          {/* #TODO: "maybe you should create component for rows " */}
          <Row className="mb-3">
            <Col sm={3} xl={2}>
              email:
            </Col>
            <Col sm={9}>{email}</Col>
          </Row>
          <Row>
            <Col sm={3} xl={2}>
              description:
            </Col>
            <Col sm={9}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, quam atque magni possimus animi impedit incidunt!
              Molestiae dolorem tempore aspernatur.
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
};

export default Profile;
