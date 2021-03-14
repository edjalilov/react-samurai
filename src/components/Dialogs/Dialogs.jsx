import React from "react";
import classes from "./Dialogs.module.css";
import DialogsItems from "./DialogsItems/DialogsItems";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let messageElements = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogsItems id={d.id} name={d.name} avatar={d.avatar} />
  ));

  let SendElements = React.createRef();

  let sendMessage = () => {
    let sendText = SendElements.current.value;
    alert(sendText);
  };

  return (
    <>
      <div className={classes.dialogs}>
        <div className={classes.dialogsElements}>{dialogsElements}</div>
        <div className={classes.messages}>{messageElements}</div>
      </div>
      <div className={classes.messageItem}>
        <textarea
          ref={SendElements}
          placeholder="Write a message..."
          className={classes.messageText}
        ></textarea>
        <button className={classes.sendBtn} onClick={sendMessage}>
          Send
        </button>
      </div>
    </>
  );
};
export default Dialogs;
