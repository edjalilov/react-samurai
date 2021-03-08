import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

// ================================= Вынести в отдельный компонент ================== //
const DialogsItems = (props) => {
  return (
    <NavLink to={`/dialogs/${props.id}`} className={classes.dialog}>
      {props.name}
    </NavLink>
  );
};

const Message = (props) => {
  return <div className={classes.message}>{props.message}</div>;
};
// ================================================================================== //
const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogsItems id="1" name="Andrey" />
        <DialogsItems id="2" name="Sveta" />
        <DialogsItems id="3" name="Viktor" />
        <DialogsItems id="4" name="Sasha" />
        <DialogsItems id="5" name="Maxim" />
        <DialogsItems id="6" name="Dimych" />
      </div>
      <div className={classes.messages}>
        <Message message="Hi!" />
        <Message message="How is your way of Samurai?" />
        <Message message="Very nice!" />
      </div>
    </div>
  );
};
export default Dialogs;
