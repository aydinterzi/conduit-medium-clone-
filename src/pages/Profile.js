import React, {useState} from "react";
import Articles from "../components/Articles";
import styles from "./Profile.module.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { selectMyArticles } from "../redux/articleSlice";
import { useEffect } from "react";
import axios from "axios";
const Profile = () => {
  const {user} = useSelector(state => state.user.currentUser)
  const { username } = useParams();
  const [articles, setArticles] = useState(false);
  const [favArticles, setFavArticles] = useState([]);
  const myArticles = useSelector(state => selectMyArticles(state,user.username));
  const articleStatus = useSelector((state) => state.articles.status);

  useEffect(()=> {
    const getFavoritedArticles = async () =>{
      try
      {
        const {data} = await axios.get(`articles?favorited=${username}`)
        setFavArticles(data.articles);
      }
      catch(err)
      {
        console.log(err);
      }
    } 
   getFavoritedArticles();
  },[username])
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.profile}>
          <img src={user.image} alt="user profile" className={styles.image}/>
          <h4>{username}</h4>
          <p>{user.bio}</p>
          <NavLink to="/settings" className={styles.link}>
            Edit Profile Settings
          </NavLink>
        </div>
      </header>
      <div className={styles.main}>
        <div className={styles.feeds}>
            <a href="/" onClick={e =>{e.preventDefault(); setArticles(true)}} className={styles.link}>My Articles</a>
            <a href="/" onClick={e => {e.preventDefault();   setArticles(false)}} className={styles.link}>Favorited Articles</a>
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
