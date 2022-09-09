import React, { useState } from "react";
import styles from "./EditArticle.module.css";
import {  updateArticle } from "../redux/articleSlice";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const EditArticle = () =>{
  console.log("asd")
    const {state : article} = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [body, setBody] = useState(article.body);
    const [description, setDescription] = useState(article.description);
    const [title, setTitle] = useState(article.title);
    const [tagList, setTagList] = useState(article.tagList);
    const handlePublish = () => {
      dispatch(
        updateArticle({
          ...article,
          title,
          description,
          body,
          tagList,
        })
      );
      console.log(article);
    };
  
    return (
      <div className={styles.container}>
        <input
        value={title}
          className={styles.input}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Article Title"
        />
        <input
        value={description}
          className={styles.input}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="What's this article about"
        />
        <textarea
        value={body}
          className={styles.input}
          onChange={(e) => setBody(e.target.value)}
          cols="30"
          rows="8"
          placeholder="Write your article (in markdown)"
        ></textarea>
        <input
        value={tagList}
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

export default EditArticle