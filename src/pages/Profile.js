import React, {useState} from "react";
import Articles from "../components/Articles";
import styles from "./Profile.module.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { selectFavoritedArticles, selectMyArticles } from "../redux/articleSlice";
const Profile = () => {
  const { username } = useParams();
  const [articles, setArticles] = useState(false);
  const favArticles = useSelector(selectFavoritedArticles);
  const myArticles = useSelector(state => selectMyArticles(state,username));
  const articleStatus = useSelector((state) => state.articles.status);

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.profile}>
          <img src="" alt="" />
          <h4>{username}</h4>
          <p>merhaba</p>
          <NavLink to="/settings" className={styles.link}>
            Edit Profile Settings
          </NavLink>
        </div>
      </header>
      <div className={styles.main}>
        <div className={styles.feeds}>
            <a href="/" onClick={e =>{e.preventDefault(); setArticles(true)}} className={styles.link}>Your feed</a>
            <a href="/" onClick={e => {e.preventDefault();   setArticles(false)}} className={styles.link}>Global feed</a>
          </div>
        <div className={styles.articles}>
        {articleStatus === "loading" ? "Loading articles..." : (
              articles === false ? <Articles articles={favArticles } /> : <Articles articles={myArticles} />
            )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
