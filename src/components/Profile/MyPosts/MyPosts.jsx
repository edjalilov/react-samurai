import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <>
      <h5>My Posts</h5>
      <div className={classes.item}>
        <textarea placeholder="Your news..."></textarea>
        <button type="submit">Add Post</button>
      </div>
      <Post message="Hi, how are you?" countLike="2"/>
      <Post message="It's my first post" countLike="8" />
    </>
  );
};
export default MyPosts;
