import React from 'react'
import Article from './Article';
import styles from './Articles.module.css';
const Articles = () => {
  return (
    <div className={styles.container}>
        <Article/>
        <hr />
        <Article/>
        <hr />
        <Article/>
    </div>
  )
}

export default Articles