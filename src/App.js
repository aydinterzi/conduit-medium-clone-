import { Routes, Route, NavLink } from "react-router-dom";
import styles from './App.module.css';

import Navbar from "./components/Navbar";
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NewArticle from './pages/NewArticle';
import Settings from './pages/Settings';
import Profile from "./pages/Profile";

function App() {
  return (
  <>
      <Navbar/>
      <div className={styles.container}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<SignIn/>}/>
        <Route path="/register" element={<SignUp/>}/>
        <Route path="/editor" element={<NewArticle/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/@:username" element={<Profile/>}/>
      </Routes>
      </div>
  </>
  );
}

export default App;
