import React from 'react'
import Article from './Article';
import styles from './Articles.module.css';
const Articles = ( {articles} ) => {
  console.log(articles)
  return (
    <div className={styles.container}>
        {articles.map((article,index)=>(
          <>
          <hr />
          <Article key={index} article={article}/>
          </>
        ))}
    </div>
  )
}

export default Articles