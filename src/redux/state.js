const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: "14" },
        { id: 2, message: "It's my first post", likesCount: "3" },
      ],
      newPostText: "it-kamasutra.com",
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
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    debugger;
    if (action.type === ADD_POST) {
      let newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: "ADD-POST" });

export const onPostChangeActionCreator = (text) => ({
  type: "UPDATE-NEW-POST-TEXT",
  newText: text,
});

export default store;
