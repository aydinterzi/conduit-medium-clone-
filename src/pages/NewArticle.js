import React, { useState } from "react";
import styles from "./NewArticle.module.css";
import { createArticle } from "../redux/articleSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const NewArticle = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [body, setBody] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [tagList, setTagList] = useState([]);

  const handlePublish = () => {
    dispatch(
      createArticle({
        title,
        description,
        body,
        tagList,
      })
    );
    navigate(`/article/${title}-92192`);
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Article Title"
      />
      <input
        className={styles.input}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="What's this article about"
      />
      <textarea
        className={styles.input}
        onChange={(e) => setBody(e.target.value)}
        cols="30"
        rows="8"
        placeholder="Write your article (in markdown)"
      ></textarea>
      <input
        className={styles.input}
        type="text"
        placeholder="Enter tags"
        onChange={(e) => setTagList(e.target.value.split(' '))}
      />
      <button onClick={handlePublish} className={styles.btn}>
        Publish Article
      </button>
    </div>
  );
};

export default NewArticle;
