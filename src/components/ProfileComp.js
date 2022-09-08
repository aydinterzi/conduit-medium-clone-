import axios from "axios";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./ProfileComp.module.css";
const ProfileComp = ({ article }) => {
  const [follow, setFollow] = useState(article.author.following);
  const handleFollow = async () => {
    if (follow) {
      const { data } = await axios.delete(`profiles/${article.author.username}/follow`);
      setFollow(false);
    } else {
      const { data } = await axios.post(`profiles/${article.author.username}/follow`);
      setFollow(true);
    }
  };

  return (
    <div className={styles.profile}>
      <img src={article.author.image} alt="resim" />
      <div className={styles.author}>
        <NavLink to={`/@${article.author.username}`}>
          {article.author.username}
        </NavLink>
        <span>{article.createdAt}</span>
      </div>
      <button onClick={handleFollow}>
        {follow ? "+ Unfollow Gerome" : "+ Follow Gerome"}
      </button>
      <button>Unfavorite Article{article.favoritesCount}</button>
    </div>
  );
};

export default ProfileComp;
