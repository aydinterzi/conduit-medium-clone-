import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { updateUser, logout } from '../redux/userSlice';
import styles from './Settings.module.css';

function Settings() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [email, setEmail] = useState(currentUser.user.email);
  const [username, setUsername] = useState(currentUser.user.username);
  const [bio, setBio] = useState(currentUser.user.bio);
  const [image, setImage] = useState(currentUser.user.image);
  const [password, setPassword] = useState('');

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const handleSubmit = async () => {
    try {
      const { data } = await axios.put('user', {
        user: {
          email,
          bio,
          username,
          image,
          password,
        },
      });
      dispatch(updateUser(data));
      navigate(`/@${currentUser.user.username}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.setting}>Your Settings</h1>
      <input
        onChange={(e) => setImage(e.target.value)}
        value={image}
        className={styles.input}
        type="text"
        placeholder="URL of profile picture"
      />
      <input
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        className={styles.input}
        type="text"
      />
      <textarea
        onChange={(e) => setBio(e.target.value)}
        value={bio}
        className={styles.input}
        cols="30"
        rows="8"
        placeholder="Short bio about you"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className={styles.input}
        type="text"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        className={styles.input}
        type="text"
        placeholder="New Password"
      />
      <button onClick={handleSubmit} className={styles.greenBtn}>
        Update Settings
      </button>
      <hr />
      <button type="submit" onClick={handleLogout} className={styles.redBtn}>
        Or click here to logout.
      </button>
    </div>
  );
}

export default Settings;
