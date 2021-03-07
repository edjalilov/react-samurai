import React from "react";
import Logo from "../../assets/logo192.png";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.headerLogo}>
          <a href="#H" className={classes.link}>
            <img src={Logo} alt="logo" /> React, Way of Samurai
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
