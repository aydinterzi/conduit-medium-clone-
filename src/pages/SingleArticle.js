import React from "react";
import { useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import ProfileComp from "../components/ProfileComp";
import styles from './SingleArticle.module.css'

const SingleArticle = () => {
  const {currentUser} = useSelector(state => state.user);
  const { title } = useParams();
  const { state } = useLocation();
  const { article } = state;
  console.log(title);
  console.log(article);
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.content}>
          <h1>{title}</h1>
          <ProfileComp article ={article}/>
        </div>
      </header>
      <div className={styles.content}>
        <p>{article.body}</p>
        <ul className={styles.tagList}>
            {article.tagList.map((tag, index) => (
              <li className={styles.tagItem} key={index}>
                {tag}
              </li>
            ))}
          </ul>
          <hr />
          <div className={styles.mAuto}>
            <ProfileComp article={article}/>
            </div>
            <div className={styles.post}>
              <textarea placeholder="Write a comment..." className={styles.postTextArea} cols="30" rows="4"></textarea>
              <div className={styles.postFooter}>
                  <img src={currentUser.user.image} alt="asd" />
                  <button>Post Comment</button>
              </div>
              
            </div>
      </div>

    </div>
  );
};

export default SingleArticle;
