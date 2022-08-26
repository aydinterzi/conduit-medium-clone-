import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavbarLogout.module.css'

const NavbarLogout = () => {
  return (
    <div className={styles.container}>
      <NavLink to="/login" style={({isActive})=> ({
        color:isActive?'black':'transperent',
        fontWeight:isActive?'bold':'normal'
        })}>Sign in</NavLink>
      <NavLink to="/register" style={({isActive})=> ({
        color:isActive?'black':'transperent',
        fontWeight:isActive?'bold':'normal'
      })}>Sign up</NavLink>
    </div>
  )
}

export default NavbarLogout