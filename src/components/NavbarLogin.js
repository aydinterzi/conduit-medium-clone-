import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './NavbarLogin.module.css';
const NavbarLogin = () => {

  const {currentUser} = useSelector(state => state.user)
  console.log(currentUser);
  return (
    <div className={styles.container}>
      <NavLink to="/editor" style={({isActive})=> ({
        color:isActive?'black':'transperent',
        fontWeight:isActive?'bold':'normal'
        })}>New Article</NavLink>
      <NavLink to="/settings" style={({isActive})=> ({
        color:isActive?'black':'transperent',
        fontWeight:isActive?'bold':'normal'
      })}>Settings</NavLink>
       <NavLink to={currentUser && `@${currentUser.user.username}`} style={({isActive})=> ({
        color:isActive?'black':'transperent',
        fontWeight:isActive?'bold':'normal'
      })}>{ currentUser && currentUser.user.username}</NavLink>
    </div>
  )
}

export default NavbarLogin