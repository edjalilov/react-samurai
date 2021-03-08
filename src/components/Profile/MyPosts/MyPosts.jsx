import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

let posts = [
  { message: "Hi, how are you?", likesCount: "14" },
  { message: "It's my first post", likesCount: "3" },
];

let postElements = posts.map((p) => (
  <Post message={p.message} likesCount={p.likesCount} />
));

const MyPosts = () => {
  return (
    <>
      <div className={classes.item}>
        <div>
          <textarea placeholder="What's on your mind?"></textarea>
        </div>
        <div className={classes.btnWrapper}>
          <button type="submit">Add Post</button>
        </div>
      </div>
      {postElements}
    </>
  );
};
export default MyPosts;
