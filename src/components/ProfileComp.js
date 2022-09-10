import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { deleteArticle } from "../redux/articleSlice";
import styles from "./ProfileComp.module.css";
const ProfileComp = ({ article }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useSelector(state => state.articles)
  const [follow, setFollow] = useState(article.author.following);
  const { currentUser } = useSelector((state) => state.user);
  const handleFollow = async () => {
    if (follow) {
      const { data } = await axios.delete(
        `profiles/${article.author.username}/follow`
      );
      setFollow(false);
    } else {
      const { data } = await axios.post(
        `profiles/${article.author.username}/follow`
      );
      setFollow(true);
    }
  };

  const editArticle = () => {
    navigate(`/editor/${article.slug}`,{state:article})
  }

  const deleteArticles = async () => {
    dispatch(deleteArticle(article.slug));
    if(status==="loading")
      console.log("loading")
    if(status==="succeeded")
      {
        console.log("succed")
        navigate("/");}
  }

  return (
    <div className={styles.profile}>
      <img src={article.author.image} alt="resim" />
      <div className={styles.author}>
        <NavLink to={`/@${article.author.username}`}>
          {article.author.username}
        </NavLink>
        <span>{article.createdAt}</span>
      </div>
      {article.author.username === currentUser.user.username ? (
        <div>
          <button onClick={editArticle}>Edit Article</button>
          <button onClick={deleteArticles}>Delete Article</button>
        </div>
      ) : (
        <div>
          <button onClick={handleFollow}>
            {follow ? "+ Unfollow Gerome" : "+ Follow Gerome"}
          </button>
          <button>Unfavorite Article{article.favoritesCount}</button>
        </div>
      )}
    </div>
  );
};

export default ProfileComp;
