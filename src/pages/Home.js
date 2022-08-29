import React, { useState } from 'react'
import Articles from '../components/Articles'
import Header from '../components/Header';

import styles from './Home.module.css'

const Home = () => {
  const [articles, setArticles] = useState();
  
  return (
    <>
    <Header/>
    <div className={styles.container}>
      <div className={styles.feeds}>
        <p>Your feed</p>
        <p>Global feed</p>
      </div>
      <div className={styles.feeds}>
      <Articles articles={articles}/>
      </div>
      <div className={styles.tags}>
        
      </div>
    </div>
    </>
  )
}

export default Home