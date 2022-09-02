import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./Settings.module.css";
const Settings = () => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div className={styles.container}>
      <h1 className={styles.setting}>Your Settings</h1>
      <input
        onChange={(e) => setImage(e.target.value)}
        className={styles.input}
        type="text"
        placeholder="URL of profile picture"
      />
      <input
        onChange={(e) => setUsername(e.target.value)}
        value={currentUser.user.username}
        className={styles.input}
        type="text"
      />
      <textarea
        onChange={(e) => setBio(e.target.value)}
        className={styles.input}
        cols="30"
        rows="8"
        placeholder="Short bio about you"
      ></textarea>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={currentUser.user.email}
        className={styles.input}
        type="text"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        className={styles.input}
        type="text"
        placeholder="New Password"
      />
      <button  className={styles.greenBtn}>
        Update Settings
      </button>
      <hr />
      <button type="submit" className={styles.redBtn}>
        Or click here to logout.
      </button>
    </div>
  );
};

export default Settings;
