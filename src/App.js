import { Routes, Route, NavLink } from "react-router-dom";
import styles from './App.module.css';
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NewArticle from './pages/NewArticle';
import SingleArticle from "./pages/SingleArticle";
import Settings from './pages/Settings';
import Profile from "./pages/Profile";
import axios from "axios";
import { fetchArticles } from "./redux/articleSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const articleStatus = useSelector((state) => state.articles.status);
  axios.defaults.baseURL = "https://api.realworld.io/api/";
  axios.defaults.headers.common['Authorization'] =currentUser && `Bearer ${currentUser.user.token}`;
  useEffect(() => {
    if(articleStatus === "idle")
    {
      dispatch(fetchArticles());
    }
  }, []);
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
        <Route path="/article/:title" element={<SingleArticle/>}/>
      </Routes>
      </div>
  </>
  );
}

export default App;
