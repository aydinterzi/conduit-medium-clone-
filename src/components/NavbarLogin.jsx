import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RiSettings5Fill } from 'react-icons/ri';
import { MdOutlineArticle } from 'react-icons/md';
import styles from './NavbarLogin.module.css';

function NavbarLogin() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className={styles.container}>
      <NavLink
        to="/editor"
        className={styles.link}
        style={({ isActive }) => ({
          color: isActive ? 'black' : 'transperent',
          fontWeight: isActive ? 'bold' : 'normal',
        })}
      >
        <MdOutlineArticle style={{ color: '#aaa' }} />
        New Article
      </NavLink>
      <NavLink
        to="/settings"
        className={styles.link}
        style={({ isActive }) => ({
          color: isActive ? 'black' : 'transperent',
          fontWeight: isActive ? 'bold' : 'normal',
        })}
      >
        <RiSettings5Fill style={{ color: '#aaa' }} />
        Settings
      </NavLink>
      <NavLink
        to={currentUser && `@${currentUser.user.username}`}
        className={styles.link}
        style={({ isActive }) => ({
          color: isActive ? 'black' : 'transperent',
          fontWeight: isActive ? 'bold' : 'normal',
        })}
      >
        {currentUser && currentUser.user.username}
      </NavLink>
    </div>
  );
}

export default NavbarLogin;
