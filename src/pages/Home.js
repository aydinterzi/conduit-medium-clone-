import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Articles from "../components/Articles";
import Header from "../components/Header";

import styles from "./Home.module.css";

const Home = () => {
  const [articles, setArticles] = useState();
  const [tags, setTags] = useState();
  const { currentUser } = useSelector(state => state.user);
  useEffect(()=> {
    const getTags = async ()  => {
      try {
        const res = await axios.get('tags');
        setTags(res.data.tags);
      } catch (error) {
      }
    }
    getTags();
    },[])
  return (
    <>
      {!currentUser && <Header />}
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.feeds}>
            <a href="#">Your feed</a>
            <a href="#">Global feed</a>
          </div>
          <div className={styles.articles}>
            <Articles articles={articles} />
          </div>
        </div>
      <div className={styles.tags}>
        <p>Popular Tags</p>
        <div className={styles.tag}>
          {tags && tags.map(tag => (
            <a>{tag}</a>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;
