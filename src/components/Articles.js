import React from "react";
import Article from "./Article";
import styles from "./Articles.module.css";
const Articles = ({ articles }) => {
  console.log(articles)
  return (
    <div className={styles.container}>
      {articles.length !== 0 ? articles.map((article, index) => (
        <div key={index}>
          <hr className={styles.line}/>
          <Article article={article} />
        </div>
      )): "No articles are here... yet."}
    </div>
  );
};

export default Articles;
