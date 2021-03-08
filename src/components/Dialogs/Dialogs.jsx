import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <NavLink to='/Andrey' className={classes.dialog}>Andrey</NavLink>
        <NavLink to='/Sveta' className={classes.dialog}>Sveta</NavLink>
        <NavLink to='/Viktor' className={classes.dialog}>Viktor</NavLink>
        <NavLink to='/Sasha' className={classes.dialog}>Sasha</NavLink>
        <NavLink to='/Maxim' className={classes.dialog}>Maxim</NavLink>
        <NavLink to='/Dymich' className={classes.dialog}>Dimych</NavLink>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>Hi!</div>
        <div className={classes.message}>How is your way of Samurai?</div>
        <div className={classes.message}>Very nice!</div>
      </div>
    </div>
  );
};
export default Dialogs;
