import React, { useState } from "react";
import Articles from "../components/Articles";
import styles from "./Profile.module.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { selectMyArticles } from "../redux/articleSlice";
import { useEffect } from "react";
import axios from "axios";
import { getSuggestedQuery } from "@testing-library/react";
const Profile = () => {
  const [user, setUser] = useState(null);
  const { username } = useParams();
  const [articles, setArticles] = useState(false);
  const [favArticles, setFavArticles] = useState([]);
  const [authorArticles, setAuthorArticles] = useState([]);

  const articleStatus = useSelector((state) => state.articles.status);

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.get(`profiles/${username}`);
        setUser(data.profile);
        console.log(data)
      } catch (err) {
        console.log(err);
      }
    };

    const getFavoritedArticles = async () => {
      try {
        const { data } = await axios.get(`articles?favorited=${username}`);
        setFavArticles(data.articles);
      } catch (err) {
        console.log(err);
      }
    };
    const getAuthorArticles = async () => {
      try {
        const { data } = await axios.get(`articles?author=${username}`);
        setAuthorArticles(data.articles);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    getFavoritedArticles();
    getAuthorArticles();
    getUser();
  }, [username]);
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.profile}>
          <img src={user && user.image} alt="user profile" className={styles.image} />
          <h2>{user && username}</h2>
          <p>{user && user.bio}</p>
          <NavLink to="/settings" className={styles.settings}>
            Edit Profile Settings
          </NavLink>
        </div>
      </header>
      <div className={styles.main}>
        <div className={styles.feeds}>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setArticles(true);
            }}
            className={articles && styles.link}
          >
            My Articles
          </a>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setArticles(false);
            }}
            className={!articles && styles.link}
          >
            Favorited Articles
          </a>
        </div>
        <div className={styles.articles}>
          {articleStatus === "loading" ? (
            "Loading articles..."
          ) : articles === false ? (
            <Articles articles={favArticles} />
          ) : (
            <Articles articles={authorArticles} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
