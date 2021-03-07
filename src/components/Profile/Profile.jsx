import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <>
      <div className={classes.content}>
        <div>
          <img
            src="http://cdn29.us1.fansshare.com/images/samuraichamploo/samurai-champloo-mugen-black-and-white-poster-154645662.jpg"
            alt="bg-profile"
            style={{ width: "100%" }}
          />
        </div>
        <div>ava + description</div>
        <MyPosts />
      </div>
    </>
  );
};
export default Profile;
