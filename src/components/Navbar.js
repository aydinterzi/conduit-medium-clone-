import React from 'react';
import styles from './Navbar.module.css';

import NavbarLogout from './NavbarLogout';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
    <div className={styles.container}>
      <NavLink to="#" className={styles.logo}>conduit</NavLink>
      <div className={styles.navigation}>
          <NavLink to="/"style={({isActive})=> ({
        color:isActive?'black':'transperent',
        fontWeight:isActive?'bold':'normal'
        })}>Home</NavLink>
          <NavbarLogout/>
      </div>
    </div>
    </>
  )
}

export default Navbar