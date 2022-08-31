import React from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import styles from './FavoriteButton.module.css'
const FavoriteButton = ( {like} ) => {
  return (
    <button className={styles.btn}>
        <AiOutlineHeart className={styles.logo}/>
        <span>{like}</span>
    </button>
  )
}

export default FavoriteButton