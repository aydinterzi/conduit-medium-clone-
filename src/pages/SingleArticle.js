import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import ProfileComp from "../components/ProfileComp";
import styles from "./SingleArticle.module.css";
import axios from "axios";
import { useState } from "react";
import Comment from "../components/Comment";
import { selectArticleBySlug } from "../redux/articleSlice";

const SingleArticle = () => {
  const [comments, setComments] = useState([]);
  const { currentUser } = useSelector((state) => state.user);
  const { title } = useParams();
  const { status } = useSelector((state) => state.articles);
  console.log(status);
  console.log(title);
  const article = useSelector((state) => selectArticleBySlug(state, title));
  console.log(article);
  useEffect(() => {
    const getComments = async () => {
      const { data } = await axios.get(`articles/${title}/comments`);
      setComments(data.comments);
    };
    getComments();
  }, [title]);
  return (
    <div className={styles.container}>
      {status === "succeeded" ? <header className={styles.header}>
        <div className={styles.content}>
          <h1>{title}</h1>
          <ProfileComp article={article} />
        </div>
      </header> : ""}
      {status === "succeeded" ? <div className={styles.content}>
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
          <ProfileComp article={article} />
        </div>
        <div className={styles.post}>
          <textarea
            placeholder="Write a comment..."
            className={styles.postTextArea}
            cols="30"
            rows="4"
          ></textarea>
          <div className={styles.postFooter}>
            <img src={currentUser.user.image} alt="asd" />
            <button>Post Comment</button>
          </div>
        </div>
        {comments.map((comment) => (
          <Comment comment={comment} />
        ))}
      </div> : ""}
    </div>
  );
};

export default SingleArticle;
