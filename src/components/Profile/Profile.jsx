import React from "react";
import MyPosts from "./MyPosts/MyPosts";
// import classes from "./Profile.module.css";
import ProfileInfo from "../Profile/ProfileInfo/ProfileInfo";


const Profile = (props) => {
  return (
    <>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} addPost={props.addPost}/>
    </>
  );
};
export default Profile;
