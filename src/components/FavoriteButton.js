import React from 'react'
import { useState } from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { unFavoriteArticle } from '../redux/articleSlice'
import styles from './FavoriteButton.module.css'
const FavoriteButton = ( {like, slug, isLike} ) => {
  const dispatch = useDispatch();
  const [favorited, setFavorited] = useState(isLike);

  const favoriteArticle = () => {
    if(favorited)
    {
      console.log("true")
      dispatch(unFavoriteArticle(slug));
    }
      
    else
    {
      console.log("false")
      dispatch(favoriteArticle(slug));
    }
    
      
  }

  return (
    <button onClick={favoriteArticle} className={styles.btn}>
        <AiOutlineHeart className={styles.logo}/>
        <span>{like}</span>
    </button>
  )
}

export default FavoriteButton