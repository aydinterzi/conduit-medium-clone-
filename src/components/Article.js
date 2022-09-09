import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Article.module.css";
import FavoriteButton from "./FavoriteButton";

const Article = ({ article }) => {
  const navigate = useNavigate();

  const handleArticle = () => {
    navigate(`/article/${article.slug}`);
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.profile}>
          <img src={article.author.image} alt="resim" />
          <div className={styles.author}>
            <NavLink to={`@${article.author.username}`}>{article.author.username}</NavLink>
            <span>{article.createdAt}</span>
          </div>
        </div>

        <FavoriteButton
          like={article.favoritesCount}
          slug={article.slug}
          isLike={article.favorited}
        />
      </div>
      <div onClick={handleArticle} className={styles.content}>
        <h1 className={styles.slug}>{article.slug.replaceAll("-", " ")}</h1>
        <p>{article.description}</p>
      </div>
      <div className={styles.footer}>
        <p>Read more...</p>
        <ul className={styles.tagList}>
          {article.tagList.map((tag, index) => (
            <li className={styles.tagItem} key={index}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Article;
