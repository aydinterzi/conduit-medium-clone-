import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  articles: [],
  status: "idle",
  error: false,
};

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async () => {
    const { data } = await axios.get("articles");
    return data.articles;
  }
);

export const favoriteArticle = createAsyncThunk(
  "articles/favoriteArticles",
  async (slug) => {
    const { data } = await axios.post(`articles/${slug}/favorite`);
    return data.article;
  }
);

export const unFavoriteArticle = createAsyncThunk(
  "articles/unFavoriteArticles",
  async (slug) => {
    const { data } = await axios.delete(`articles/${slug}/favorite`);
    return data.article;
  }
);

export const createArticle = createAsyncThunk(
  "articles/createArticle",
  async (article) => {
    const { data } = await axios.post("articles", { article });
    console.log(data);
    return data.article;
  }
);

export const updateArticle = createAsyncThunk(
  "articles/updateArticle",
  async (article) => {
    console.log(article);
    const { data } = await axios.put(`articles/${article.slug}`,{article});
    return data.article;
  }
);

export const deleteArticle = createAsyncThunk(
  "articles/favoriteArticles",
  async (slug) => {
    const { data } = await axios.delete(`articles/${slug}`);
    return data.articles;
  }
);

const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchArticles.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(favoriteArticle.fulfilled, (state, action) => {
        const { slug } = action.payload;
        const article = state.articles.find((article) => article.slug === slug);
        article.favoritesCount = action.payload.favoritesCount;
      })
      .addCase(unFavoriteArticle.fulfilled, (state, action) => {
        const { slug } = action.payload;
        const article = state.articles.find((article) => article.slug === slug);
        article.favoritesCount = action.payload.favoritesCount;
      })
      .addCase(createArticle.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(createArticle.fulfilled,(state, action) => {
        state.status = "succeeded";
        console.log(action.payload);
        state.articles.push(action.payload);
      })
      .addCase(updateArticle.pending, (state, action) =>{
        state.status = "loading";
      })
      .addCase(updateArticle.fulfilled, (state, action) =>{
        const { slug } = action.payload;
        console.log(action.payload);
        const article = state.articles.find((article) => article.slug === slug);
        console.log(article);
        article.body = action.payload.body;
        article.title = action.payload.title;
        article.description = action.payload.description;
        article.tagList = action.payload.tagList; 
        state.status = "succeeded";
      })
  },
});

export default articleSlice.reducer;

export const selectGlobalFeed = (state) => state.articles.articles;

export const selectMyFeed = (state) =>
  state.articles.articles.filter((article) => article.author.following);

export const selectFavoritedArticles = (state) =>
  state.articles.articles.filter((article) => article.favorited);

export const selectMyArticles = (state, username) =>
  state.articles.articles.filter(
    (article) => article.author.username === username
  );

export const selectArticleBySlug = (state, slug) =>
  state.articles.articles.find((article) => article.slug === slug);
