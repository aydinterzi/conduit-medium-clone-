import React from 'react';
import styles from './NewArticle.module.css';

const NewArticle = () => {
  return (
    <div className={styles.container}>
      <input className={styles.input} type="text" placeholder='Article Title'/>
      <input className={styles.input} type="text" placeholder="What's this article about"/>
      <textarea className={styles.input} cols="30" rows="8" placeholder='Write your article (in markdown)'></textarea>
      <input className={styles.input} type="text" placeholder='Enter tags'/>
      <button className={styles.btn}>Publish Article</button>
    </div>
  )
}

export default NewArticle