import { Col, Nav, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { LinkContainer } from "react-router-bootstrap";
import { userRole } from "../../store/authSlice";
import NavBar from "../navbar/NavBar";

const Layout = ({ children }) => {
  const location = useLocation();
  const role = useSelector(userRole);

  const sidebar = (
    <Row>
      <Col md={3} lg={3} xl={2} className="bg-light sidebar d-none d-md-block">
        <Nav className="d-flex flex-column mt-4" activeKey={location.pathname}>
          <LinkContainer to="/dashboard">
            <Nav.Link>Dashboard</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/favorites">
            <Nav.Link>Favorites</Nav.Link>
          </LinkContainer>
        </Nav>
      </Col>
      <Col md={9} lg={9} xl={8} className="py-4 px-4">
        {children}
      </Col>
    </Row>
  );

  const withoutSidebar = <main className="py-4 px-4">{children}</main>;

  return (
    <>
      <NavBar />
      {role ? sidebar : withoutSidebar}
    </>
  );
};

export default Layout;
