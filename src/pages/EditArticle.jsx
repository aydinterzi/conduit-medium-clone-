import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './EditArticle.module.css';
import { updateArticle } from '../redux/articleSlice';

function EditArticle() {
  const { state: article } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useSelector((state) => state.articles);
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
      }),
    );
    if (status === 'succeeded') {
      navigate(`/article/${title}-92192`);
    }
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
      />
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
}

export default EditArticle;
