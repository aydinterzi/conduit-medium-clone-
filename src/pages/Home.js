import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Articles from "../components/Articles";
import Header from "../components/Header";

import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [tags, setTags] = useState([]);
  const { currentUser } = useSelector(state => state.user);

  const handleMyFeed = async () => {
    try {
      const res = await axios.get('articles/feed',{
        headers: {
          Authorization : `Bearer ${currentUser.user.token}`
        }
      })
      setArticles(res.data.articles);
    }
    catch(err) {
      console.log(err);
    }
  }

  const handleGlobalFeed = async () => {
    try {
      const res = await axios.get('articles',{
        headers: {
          Authorization : `Bearer ${currentUser.user.token}`
        }
      })
      setArticles(res.data.articles);
      console.log(articles)
    }
    catch(err) {
      console.log(err);
    }
  }


  useEffect(()=> {
    const getTags = async ()  => {
      try {
        const res = await axios.get('tags');
        setTags(res.data.tags);
        console.log(tags);
      } catch (error) {
      }
    }
    getTags();
    handleGlobalFeed();
    },[])
  return (
    <>
      {!currentUser && <Header />}
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.feeds}>
            <a href="/" onClick={handleMyFeed} >Your feed</a>
            <a href onClick={handleGlobalFeed} >Global feed</a>
          </div>
          <div className={styles.articles}>
            <Articles articles={articles}/>
          </div>
        </div>
      <div className={styles.tags}>
        <p>Popular Tags</p>
        <div className={styles.tag}>
          {tags && tags.map((tag, index) => (
            <a key={index}>{tag}</a>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;
