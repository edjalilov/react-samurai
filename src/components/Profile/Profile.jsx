import React from "react";
import MyPosts from "./MyPosts/MyPosts";
// import classes from "./Profile.module.css";
import ProfileInfo from "../Profile/ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <>
      <ProfileInfo />
      <MyPosts
        posts={props.profilePage.posts}
        dispatch={props.dispatch}
        newPostText={props.profilePage.newPostText}
      />
    </>
  );
};
export default Profile;
