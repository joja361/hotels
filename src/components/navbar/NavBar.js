import { NavLink, useHistory } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authSlice";

const NavBar = () => {
  const username = useSelector((store) => store.auth.username);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logout());
    history.replace("/signin");
  };

  return (
    <Navbar className="d-flex justify-content-between bg-light p-3">
      <div>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink className="ps-3" to="favorites">
          Favorites
        </NavLink>
      </div>
      <div className="d-flex">
        <div className="d-flex align-items-center  pe-3">
          <p className="mb-0 pe-1">{username}</p>
          <FaUserAlt />
        </div>
        <Button onClick={handleLogout} /*to="/signin"*/>Sign Out</Button>
      </div>
    </Navbar>
  );
};

export default NavBar;
