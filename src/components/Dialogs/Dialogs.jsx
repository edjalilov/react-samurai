import React from "react";
import classes from "./Dialogs.module.css";
import DialogsItems from "./DialogsItems/DialogsItems";
import Message from "./Message/Message";

let dialogs = [
  { id: 1, name: "Andrey" },
  { id: 2, name: "Sveta" },
  { id: 3, name: "Viktor" },
  { id: 4, name: "Sasha" },
  { id: 5, name: "Maxim" },
  { id: 6, name: "Dimych" },
];

let messages = [
  { id: 1, message: "Hi!" },
  { id: 2, message: "How is your way of Samurai?" },
  { id: 3, message: "Very nice!" },
];

let messageElements = messages.map((m) => <Message message={m.message} />);
let dialogsElements = dialogs.map((d) => (
  <DialogsItems id={d.id} name={d.name} />
));

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsElements}>{dialogsElements}</div>
      <div className={classes.messages}>{messageElements}</div>
    </div>
  );
};
export default Dialogs;
