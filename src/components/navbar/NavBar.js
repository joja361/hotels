import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { logout, userRole } from "../../store/authSlice";

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
      <FaUserAlt />
    </Nav.Link>
  );

  const signInButton = (
    <LinkContainer to="/">
      <Nav.Link>Sign in</Nav.Link>
    </LinkContainer>
  );

  const signOutButton = <Nav.Link onClick={handleLogout}>Sign out</Nav.Link>;

  return (
    <Navbar className="justify-content-space px-5 py-3" fixed="top">
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
      <Nav activeKey={location.pathname}>
        {userWhoIsLogged}
        {role ? signOutButton : signInButton}
      </Nav>
    </Navbar>
  );
};

export default NavBar;
