import React from 'react';
import styles from './Navbar.module.css';

import NavbarLogout from './NavbarLogout';
import Header from './Header';


const Navbar = () => {
  return (
    <>
    <div className={styles.container}>
      <a className={styles.logo}>conduit</a>
      <div className={styles.navigation}>
          <p>Home</p>
          <NavbarLogout/>
      </div>
    </div>
    <Header/>
    </>
  )
}

export default Navbar