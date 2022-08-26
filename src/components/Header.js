import React from 'react'

import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.brand}>conduit</h1>
      <p className={styles.text}>A place to share your knowledge</p>
    </div>
  )
}

export default Header