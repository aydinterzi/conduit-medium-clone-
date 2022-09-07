import React from "react";
import styles from "./ProfileComp.module.css";
const ProfileComp = ({ article }) => {
  return (
    <div className={styles.profile}>
      <img src={article.author.image} alt="resim" />
      <div className={styles.author}>
        <a href>{article.author.username}</a>
        <span>{article.createdAt}</span>
      </div>
      <button>+ Follow Gerome</button>
      <button>Unfavorite Article{article.favoritesCount}</button>
    </div>
  );
};

export default ProfileComp;
