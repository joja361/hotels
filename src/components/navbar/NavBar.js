import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { NavLink, useHistory, Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logout, userRole } from "../../store/authSlice";

const NavBar = () => {
  const username = useSelector((store) => store.auth.username);
  const role = useSelector(userRole);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logout());
    history.push("/signin");
  };

  const userWhoIsLogged = role && (
    <div className="d-flex align-items-center  pe-3">
      <p className="mb-0 pe-1">{username}</p>
      <FaUserAlt />
    </div>
  );

  const signInButton = (
    <Link to="/" className="btn btn-primary">
      Sign in
    </Link>
  );

  const signOutButton = <Button onClick={handleLogout}>Sign out</Button>;

  const favorites = role === "user" && (
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
        {role ? signOutButton : signInButton}
      </div>
    </Navbar>
  );
};

export default NavBar;
