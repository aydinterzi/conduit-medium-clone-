import React, { useState } from 'react';
import axios from 'axios';

import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import styles from './SignIn.module.css';
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post('users/login', {
        user: { email, password },
      });
      dispatch(loginSuccess(res.data));
      navigate('/');
    } catch (err) {
      dispatch(loginFailure());
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <p className={styles.signin}>Sign in</p>
        <p
          onClick={() => {
            navigate('/register');
          }}
          className={styles.signup}
        >
          Have an account?
        </p>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button className={styles.btn} type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
}

export default SignIn;
