import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";
import { FaUserAlt } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.nav_group_items}>
        <NavLink className={classes.nav_item} to="/dashboard">
          Dashboard
        </NavLink>
        <NavLink className={classes.nav_item} to="/">
          Favorites
        </NavLink>
      </div>
      <div className={classes.nav_group_items}>
        <div className={classes.nav_group_items}>
          <p className={classes.item_user}>username@gmail.com</p>
          <FaUserAlt />
        </div>
        <NavLink className={classes.nav_item} to="/signin">
          Sign Out
        </NavLink>
      </div>
    </nav>
);
};

export default NavBar;
