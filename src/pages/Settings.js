import React from 'react'
import { useSelector } from 'react-redux'
import styles from './Settings.module.css'
const Settings = () => {

  const { currentUser } = useSelector(state => state.user);
  console.log(currentUser)
  return (
    <div className={styles.container}>
      <h1 className={styles.setting}>Your Settings</h1>
      <input className={styles.input} type="text" placeholder='URL of profile picture'/>
      <input value={currentUser.user.username} className={styles.input} type="text" />
      <textarea className={styles.input} cols="30" rows="8" placeholder='Short bio about you'></textarea>
      <input value={currentUser.user.email} className={styles.input} type="text" />
      <input className={styles.input} type="text" placeholder='New Password' />
      <button className={styles.greenBtn}>Update Settings</button>
      <hr />
      <button className={styles.redBtn}>Or click here to logout.</button>
    </div>
  )
}

export default Settings