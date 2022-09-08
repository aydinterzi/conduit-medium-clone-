import React from 'react'
import { useState } from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { unFavoriteArticle, favoriteArticle } from '../redux/articleSlice'
import styles from './FavoriteButton.module.css'
const FavoriteButton = ( {like, slug, isLike} ) => {
  const dispatch = useDispatch();
  const [favorited, setFavorited] = useState(isLike);
  const favoriteArticles = () => {
    if(favorited)
    {
      setFavorited(false);
      dispatch(unFavoriteArticle(slug));
    }
    else
    {
      setFavorited(true);
      dispatch(favoriteArticle(slug));
    } 
  }

  return (
    <button onClick={favoriteArticles} className={styles.btn}>
        <AiOutlineHeart className={styles.logo}/>
        <span>{like}</span>
    </button>
  )
}

export default FavoriteButton