import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { NavLink, useHistory, Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authSlice";
import { useLocation } from "react-router";

const NavBar = () => {
  const username = useSelector((store) => store.auth.username);
  const isLoggedIn = useSelector((store) => store.auth.isLoggedIn);

  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();

  const handleLogout = () => {
    dispatch(logout());
    history.push("/signin");
  };

  const userWhoIsLogged = isLoggedIn && (
    <div className="d-flex align-items-center  pe-3">
      <p className="mb-0 pe-1">{username}</p>
      <FaUserAlt />
    </div>
  );

  const SignInOrSignOutButton = isLoggedIn ? (
    <Button onClick={handleLogout}>Sign out</Button>
  ) : pathname !== "/signin" ? (
    <Link to="/" className="btn btn-primary">
      Sign in
    </Link>
  ) : null;

  const favorites = isLoggedIn && (
    <NavLink className="ps-3" to="favorites">
      Favorites
    </NavLink>
  );

  return (
    <Navbar className="d-flex justify-content-between bg-light p-3">
      <div>
        <NavLink to="/dashboard">Dashboard</NavLink>
        {favorites}
      </div>
      <div className="d-flex">
        {userWhoIsLogged}
        {SignInOrSignOutButton}
      </div>
    </Navbar>
  );
};

export default NavBar;
