import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <>
      <div className={classes.item}>
        <div>
          <textarea
            placeholder="What's on your mind?"
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
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
