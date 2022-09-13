import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import NavbarLogout from './NavbarLogout';
import NavbarLogin from './NavbarLogin';

function Navbar() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className={styles.container}>
      <NavLink to="/" className={styles.logo}>
        conduit
      </NavLink>
      <div className={styles.navigation}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? 'black' : 'transperent',
            fontWeight: isActive ? 'bold' : 'normal',
          })}
        >
          Home
        </NavLink>
        {currentUser === null ? <NavbarLogout /> : <NavbarLogin />}
      </div>
    </div>
  );
}

export default Navbar;
