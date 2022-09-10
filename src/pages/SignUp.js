import React, { useState } from "react";
import axios from "axios";
import styles from "./SignUp.module.css";
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("users", {
        user: { email, password, username },
      });
    } catch (err) {}
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <p className={styles.signin}>Sign up</p>
        <p className={styles.signup}>Need an account?</p>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
        />
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
        <button className={styles.btn} type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignUp;
