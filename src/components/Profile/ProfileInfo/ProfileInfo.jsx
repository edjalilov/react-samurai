import React from "react";
import classes from "./Profile.module.css";
import Ava from "../../../assets/ava.jpg";

const ProfileInfo = () => {
  return (
    <>
      <div>
        <img
          src="http://cdn29.us1.fansshare.com/images/samuraichamploo/samurai-champloo-mugen-black-and-white-poster-154645662.jpg"
          alt="bg-profile"
          style={{ width: "100%" }}
        />
      </div>
      <div className={classes.descriptionBlock}>
        <img src={Ava} alt="ava" />
        <div className={classes.info}>
          <h4 className={classes.infoTite}>John Doe</h4>
          <div className={classes.infoText}><span>Birthday:</span>  08.01.1995</div>
          <div className={classes.infoText}><span>Current city:</span> Tashkent, Uzbekistan</div>
          <div className={classes.infoText}><span>Company:</span> Ucell</div>
        </div>
      </div>
    </>
  );
};
export default ProfileInfo;
