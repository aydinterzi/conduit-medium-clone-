import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Articles from "../components/Articles";
import Header from "../components/Header";
import { fetchArticles } from "../redux/articleSlice";
import { selectGlobalFeed, selectMyFeed } from "../redux/articleSlice";

import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const [tags, setTags] = useState([]);
  const { currentUser } = useSelector((state) => state.user);
  const allArticles = useSelector(selectGlobalFeed);
  const myFeed = useSelector(selectMyFeed);
  const articleStatus = useSelector((state) => state.articles.status);

  const getTags = async () => {
    try {
      const res = await axios.get("tags");
      setTags(res.data.tags);
    } catch (error) {}
  };

  useEffect(() => {
    if(articleStatus === "idle")
    {
      dispatch(fetchArticles());
    }
    getTags();
  }, []);
  return (
    <>
      {!currentUser && <Header />}
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.feeds}>
            <a href="/">Your feed</a>
            <a href="/">Global feed</a>
          </div>
          <div className={styles.articles}>
            <Articles articles={allArticles} />
          </div>
        </div>
        <div className={styles.tags}>
          <p>Popular Tags</p>
          <div className={styles.tag}>
            {tags && tags.map((tag, index) => <a key={index}>{tag}</a>)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
