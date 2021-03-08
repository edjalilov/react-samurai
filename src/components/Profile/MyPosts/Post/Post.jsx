import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <>
      <div className={classes.item}>
        <img
          src="https://avatarfiles.alphacoders.com/211/thumb-1920-211093.png"
          alt="ava"
        />
        <p className={classes.message}>{props.message}</p>
      </div>
      <span>like: {props.likesCount}</span>
    </>
  );
};
export default Post;
