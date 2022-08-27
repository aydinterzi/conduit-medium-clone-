import React,{useState} from "react";
import axios from "axios";

import styles from "./SignIn.module.css";
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data =await axios.post("users/login",{user:{email,password}});
    console.log(data);
  }

  return (
    <div className={styles.container}>
      <form>
        <p className={styles.signin}>Sign in</p>
        <p className={styles.signup}>Have an account?</p>
        <input onChange={e=>setEmail(e.target.value)} type="text" placeholder="Email"/>
        <input onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password"/>
        <button onClick={handleSubmit}>Sign in</button>
      </form>
    </div>
  );
};

export default SignIn;
