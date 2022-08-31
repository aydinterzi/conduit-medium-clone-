import React from "react";
import styles from "./Article.module.css";
import FavoriteButton from "./FavoriteButton";

const Article = ({article}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.profile}>
          <img src={article.author.image} alt="resim" />
          <div className={styles.author}>
            <a href="">{article.author.username}</a>
            <span>{article.createdAt}</span>
          </div>
        </div>
        
        <FavoriteButton like={article.favoritesCount}/>
      </div>
      <h1 className={styles.slug}>{article.slug.replaceAll('-',' ')}</h1>
      <p>{article.description}</p>
      <div className={styles.footer}>
        <p>Read more...</p>
        <ul className={styles.tagList}>
        {article.tagList.map((tag, index) => (
            <li className={styles.tagItem} key={index}>{tag}</li>
          ))}
          </ul>
      </div>
    </div>
  );
};

export default Article;
