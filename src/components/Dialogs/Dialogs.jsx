import React from "react";
import classes from "./Dialogs.module.css";
import DialogsItems from "./DialogsItems/DialogsItems";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let messageElements = props.messages.map( m => <Message message={m.message} /> );
  let dialogsElements = props.dialogs.map( d => <DialogsItems id={d.id} name={d.name} /> );
  
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsElements}>{dialogsElements}</div>
      <div className={classes.messages}>{messageElements}</div>
    </div>
  );
};
export default Dialogs;
