import { NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar className="d-flex justify-content-between bg-light p-3">
      <div>
        <NavLink to="dashboard">Dashboard</NavLink>
        <NavLink className="ps-3" to="/">
          Favorites
        </NavLink>
      </div>
      <div className="d-flex">
        <div className="d-flex align-items-center  pe-3">
          <p className="mb-0 pe-1">username@gmail.com</p>
          <FaUserAlt />
        </div>
        <NavLink to="/signin">Sign Out</NavLink>
      </div>
    </Navbar>
  );
};

export default NavBar;
