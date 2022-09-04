import React from "react";
import styles from "./Profile.module.css";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
const Profile = () => {
  const { username } = useParams();
  console.log(username);
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.profile}>
          <img src="" alt="" />
          <h4>{username}</h4>
          <p>merhaba</p>
          <NavLink to="/settings" className={styles.link}>
            Edit Profile Settings
          </NavLink>
        </div>
      </header>
      <div className={styles.main}>
        <div className={styles.feeds}>
          <a href="/">My Articles</a>
          <a href="/">Favorited Articles</a>
        </div>
        <div className={styles.articles}>asda</div>
      </div>
    </div>
  );
};

export default Profile;
