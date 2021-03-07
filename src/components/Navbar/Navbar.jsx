import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={classes.nav}>
        <ul>
          <li className={classes.navItem}>
            <a href="#P" className={`${classes.navLink} ${classes.active}`}>
              Profile
            </a>
          </li>
          <li className={classes.navItem}>
            <a href="#M" className={classes.navLink}>
              Messages
            </a>
          </li>
          <li className={classes.navItem}>
            <a href="#N" className={classes.navLink}>
              News
            </a>
          </li>
          <li className={classes.navItem}>
            <a href="#M" className={classes.navLink}>
              Music
            </a>
          </li>
          <li className={classes.navItem}>
            <a href="#S" className={classes.navLink}>
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
