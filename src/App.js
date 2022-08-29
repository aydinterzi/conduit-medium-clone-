import { Routes, Route, NavLink } from "react-router-dom";
import styles from './App.module.css';

import Navbar from "./components/Navbar";
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
  <>
      <Navbar/>
      <div className={styles.container}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<SignIn/>}/>
        <Route path="/register" element={<SignUp/>}/>
      </Routes>
      </div>
  </>
  );
}

export default App;
