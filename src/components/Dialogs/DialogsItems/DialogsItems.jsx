import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./DialogsItems.module.css";

const DialogsItems = (props) => {
  return (
    <NavLink to={`/dialogs/${props.id}`} className={classes.dialog}>
      {props.name}
    </NavLink>
  );
};
export default DialogsItems;
