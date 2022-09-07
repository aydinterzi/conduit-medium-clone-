import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Comment.module.css";
const Comment = ({ comment }) => {
  return (
    <div className={styles.post}>
      <textarea
        disabled
        value={comment.body}
        className={styles.postTextArea}
        cols="30"
        rows="4"
      ></textarea>
      <div className={styles.postFooter}>
        <img src={comment.author.image} alt="asd" />
        <NavLink to={`@${comment.author.username}`}>{comment.author.username}</NavLink>
        <p>{comment.createdAt}</p>
      </div>
    </div>
  );
};

export default Comment;
