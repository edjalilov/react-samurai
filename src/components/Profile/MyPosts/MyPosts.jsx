import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));
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
