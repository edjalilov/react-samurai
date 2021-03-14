import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  };

  return (
    <>
      <div className={classes.item}>
        <div>
          <textarea
            placeholder="What's on your mind?"
            ref={newPostElement}
          ></textarea>
        </div>
        <div className={classes.btnWrapper}>
          <button type="submit" onClick={addPost}>
            Add Post
          </button>
        </div>
      </div>
      {postElements}
    </>
  );
};
export default MyPosts;
