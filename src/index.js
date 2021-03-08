import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

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

let posts = [
  { message: "Hi, how are you?", likesCount: "14" },
  { message: "It's my first post", likesCount: "3" },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById("root")
);
