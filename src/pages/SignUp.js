import React from 'react'

import styles from './SignUp.module.css';
const SignUp = () => {
  return (
    <div className={styles.container}>
      <form>
        <p className={styles.signin}>Sign up</p>
        <p className={styles.signup}>Need an account?</p>
        <input type="text" placeholder="Username"/>
        <input type="text" placeholder="Email"/>
        <input type="password" placeholder="Password"/>
        <button>Sign up</button>
      </form>
    </div>
  )
}

export default SignUp