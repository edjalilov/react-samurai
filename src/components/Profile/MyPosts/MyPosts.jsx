import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

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
      <Post message="Hi, how are you?" likesCount="14" />
      <Post message="It's my first post" likesCount="38" />
    </>
  );
};
export default MyPosts;
