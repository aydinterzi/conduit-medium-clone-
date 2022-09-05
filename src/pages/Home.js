import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Articles from "../components/Articles";
import Header from "../components/Header";
import { fetchArticles, fetchMyFeed } from "../redux/articleSlice";
import { selectGlobalFeed, selectMyFeed } from "../redux/articleSlice";

import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const [tags, setTags] = useState([]);
  const [articles, setArticles] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const allArticles = useSelector(selectGlobalFeed);
  const myFeed = useSelector(selectMyFeed);
  const articleStatus = useSelector((state) => state.articles.status);

  console.log(myFeed)
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
      dispatch(fetchMyFeed());
    }
    getTags();
  }, []);
  return (
    <>
      {!currentUser && <Header />}
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.feeds}>
            <p onClick={e => setArticles(true)} className={styles.link}>Your feed</p>
            <p onClick={e => setArticles(false)} className={styles.link}>Global feed</p>
          </div>
          <div className={styles.articles}>
            {articleStatus === "loading" ? "Loading articles..." : (
              articles === false ? <Articles articles={allArticles} /> : <Articles articles={myFeed} />
            )}
            
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
