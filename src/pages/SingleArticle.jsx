import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProfileComp from '../components/ProfileComp';
import styles from './SingleArticle.module.css';

import Comment from '../components/Comment';
import { selectArticleBySlug } from '../redux/articleSlice';

function SingleArticle() {
  const [comments, setComments] = useState([]);
  const { currentUser } = useSelector((state) => state.user);
  const { title } = useParams();
  const { status } = useSelector((state) => state.articles);
  const article = useSelector((state) => selectArticleBySlug(state, title));
  const [comment, setComment] = useState('');

  const handleComment = async () => {
    const { data } = await axios.post(`articles/${article.slug}/comments`, {
      comment: { body: comment },
    });
    console.log(data);
    setComment('');
    setComments([...comments, data.comment]);
  };
  useEffect(() => {
    const getComments = async () => {
      const { data } = await axios.get(`articles/${title}/comments`);
      setComments(data.comments);
    };
    getComments();
  }, [title]);
  return (
    <div className={styles.container}>
      {status === 'succeeded' ? (
        <header className={styles.header}>
          <div className={styles.content}>
            <h1>{title}</h1>
            <ProfileComp article={article} />
          </div>
        </header>
      ) : (
        ''
      )}
      {status === 'succeeded' ? (
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
            <ProfileComp article={article} />
          </div>
          <div className={styles.post}>
            <textarea
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              placeholder="Write a comment..."
              className={styles.postTextArea}
              cols="30"
              rows="4"
            />
            <div className={styles.postFooter}>
              <img src={currentUser.user.image} alt="asd" />
              <button onClick={handleComment}>Post Comment</button>
            </div>
          </div>
          {comments.map((comment) => (
            <Comment comment={comment} />
          ))}
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default SingleArticle;
