import React from "react";
import Article from "./Article";
import styles from "./Articles.module.css";
const Articles = ({ articles }) => {
  return (
    <div className={styles.container}>
      {articles.map((article, index) => (
        <div key={index}>
          <hr className={styles.line}/>
          <Article article={article} />
        </div>
      ))}
    </div>
  );
};

export default Articles;
