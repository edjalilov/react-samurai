import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={classes.nav}>
        <ul>
          <li className={classes.navItem}>
            <NavLink to="/profile" className={classes.navLink} activeClassName={classes.active}>
              Profile
            </NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink to="/dialogs" className={classes.navLink} activeClassName={classes.active}>
              Messages
            </NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink to="/news" className={classes.navLink} activeClassName={classes.active}>
              News
            </NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink to="/music" className={classes.navLink} activeClassName={classes.active}>
              Music
            </NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink to="/settings" className={classes.navLink} activeClassName={classes.active}>
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
