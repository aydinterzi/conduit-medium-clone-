import React, { useState } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";

import styles from "./SignIn.module.css";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("users/login", {
        user: { email, password },
      });
      dispatch(loginSuccess(res.data));
      navigate("/");
    } catch (err) {
      dispatch(loginFailure());
    }
  };

  return (
    <div className={styles.container}>
      <form>
        <p className={styles.signin}>Sign in</p>
        <p className={styles.signup}>Have an account?</p>
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
        <button onClick={handleSubmit}>Sign in</button>
      </form>
    </div>
  );
};

export default SignIn;
