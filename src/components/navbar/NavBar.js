import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { logout, userRole } from "../../store/authSlice";
import Avatar from "../UI/Avatar";

const NavBar = () => {
  const username = useSelector((store) => store.auth.username);
  const role = useSelector(userRole);
  const location = useLocation();

  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logout());
    history.push("/signin");
  };

  const userWhoIsLogged = role && (
    <Nav.Link className="d-flex align-items-center">
      <p className="mb-0 pe-1">{username}</p>
      <Avatar sizeFor="nav-avatar" />
    </Nav.Link>
  );

  const signInButton = (
    <LinkContainer to="/">
      <Nav.Link>Sign in</Nav.Link>
    </LinkContainer>
  );

  const signOutButton = <Nav.Link onClick={handleLogout}>Sign out</Nav.Link>;

  return (
    <Navbar className="px-5 main-navbar" sticky="top">
      <Nav className="me-auto" activeKey={location.pathname}>
        <LinkContainer to="/dashboard">
          <Nav.Link>Dashboard</Nav.Link>
        </LinkContainer>
        {role && (
          <LinkContainer to="/favorites">
            <Nav.Link>Favorites</Nav.Link>
          </LinkContainer>
        )}
      </Nav>
      <Nav activeKey={location.pathname} className="align-items-center">
        {userWhoIsLogged}
        {role ? signOutButton : signInButton}
      </Nav>
    </Navbar>
  );
};

export default NavBar;
