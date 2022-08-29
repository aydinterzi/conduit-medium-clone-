import React from 'react';
import styles from './Navbar.module.css';
import { useSelector } from 'react-redux';
import NavbarLogout from './NavbarLogout';
import { NavLink } from 'react-router-dom';
import NavbarLogin from './NavbarLogin';


const Navbar = () => {
  const {currentUser} = useSelector(state => state.user)
  return (
    <>
    <div className={styles.container}>
      <NavLink to="/" className={styles.logo}>conduit</NavLink>
      <div className={styles.navigation}>
          <NavLink to="/"style={({isActive})=> ({
        color:isActive?'black':'transperent',
        fontWeight:isActive?'bold':'normal'
        })}>Home</NavLink>
          {currentUser === null ? <NavbarLogout/> : <NavbarLogin/>}
      </div>
    </div>
    </>
  )
}

export default Navbar