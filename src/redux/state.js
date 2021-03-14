import { rerenderEntireTree } from "../render";
let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: "14" },
      { id: 2, message: "It's my first post", likesCount: "3" },
    ],
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Andrey" },
      { id: 2, name: "Sveta" },
      { id: 3, name: "Viktor" },
      { id: 4, name: "Sasha" },
      { id: 5, name: "Maxim" },
      { id: 6, name: "Dimych" },
    ],

    messages: [
      { id: 1, message: "Hi!" },
      { id: 2, message: "How is your way of Samurai?" },
      { id: 3, message: "Very nice!" },
    ],
  },
  sidebar: {
    friends: [
      { id: 1, name: "Andrey" },
      { id: 2, name: "Sveta" },
      { id: 3, name: "Sasha" },
    ],
  },
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 3,
    message: postMessage,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export default state;
