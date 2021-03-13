import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./DialogsItems.module.css";

const DialogsItems = (props) => {
  return (
    <NavLink to={`/dialogs/${props.id}`} className={classes.dialog}>
      <img src="https://i.pinimg.com/originals/01/f1/a5/01f1a5fb119543d29c04c714710e9c46.png" alt="ava" /> {props.name}
    </NavLink>
  );
};
export default DialogsItems;
