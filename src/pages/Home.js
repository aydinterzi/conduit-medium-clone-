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
  const [tags, setTags] = useState([]);
  const [articles, setArticles] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const allArticles = useSelector(selectGlobalFeed);
  const myFeed = useSelector(selectMyFeed);
  const articleStatus = useSelector((state) => state.articles.status);

  useEffect(() => {
    const getTags = async () => {
      try {
        const res = await axios.get("tags");
        console.log(res.data.tags);
        setTags(res.data.tags);
      } catch (error) {}
    };
    getTags();
  }, []);
  return (
    <>
      {!currentUser && <Header />}
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.feeds}>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setArticles(true);
              }}
              className={styles.link}
            >
              Your feed
            </a>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setArticles(false);
              }}
              className={styles.link}
            >
              Global feed
            </a>
          </div>
          <div className={styles.articles}>
            {articleStatus === "loading" ? (
              "Loading articles..."
            ) : articles === false ? (
              <Articles articles={allArticles} />
            ) : (
              <Articles articles={myFeed} />
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
