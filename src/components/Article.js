import React from "react";
import styles from "./Article.module.css";

const Article = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.profile}>
          <img src="" alt="resim" />
          <div>
            <a href="">Gerome</a>
            <span>November 24, 2021</span>
          </div>
        </div>
        <button>3681</button>
      </div>
      <h1>Create new imp.</h1>
      <p>join the community by creating a new implementation</p>
      <div>
        <p>Read more...</p>
        <button>implementations</button>
      </div>
    </div>
  );
};

export default Article;
