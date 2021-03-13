import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <>
      <nav className={classes.navbar}>
        <ul className={classes.navbarItem}>
          <li className={classes.navItem}>
            <NavLink
              to="/profile"
              className={classes.navLink}
              activeClassName={classes.active}
            >
              Profile
            </NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink
              to="/dialogs"
              className={classes.navLink}
              activeClassName={classes.active}
            >
              Messages
            </NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink
              to="/news"
              className={classes.navLink}
              activeClassName={classes.active}
            >
              News
            </NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink
              to="/music"
              className={classes.navLink}
              activeClassName={classes.active}
            >
              Music
            </NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink
              to="/settings"
              className={classes.navLink}
              activeClassName={classes.active}
            >
              Settings
            </NavLink>
          </li>
        </ul>

        <ul className={classes.friends}>
          <li className={classes.online}>
            <img
              src="https://i.pinimg.com/originals/01/f1/a5/01f1a5fb119543d29c04c714710e9c46.png"
              alt="ava"
            />
            Andrey
            <span>online</span>
          </li>
          <li className={classes.online}>
            <img
              src="https://i.pinimg.com/originals/01/f1/a5/01f1a5fb119543d29c04c714710e9c46.png"
              alt="ava"
            />
            Sveta
            <span>online</span>
          </li>
          <li className={classes.online}>
            <img
              src="https://i.pinimg.com/originals/01/f1/a5/01f1a5fb119543d29c04c714710e9c46.png"
              alt="ava"
            />
            Sasha
            <span>online</span>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
