import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    articles: [],
    myFeed: [],
    status: 'idle',
    error: false
}

export const fetchArticles = createAsyncThunk('articles/fetchArticles',async () => {
    const { data } = await axios.get('articles');
    return data.articles;
})

export const fetchMyFeed = createAsyncThunk('articles/fetchMyFeed', async () => {
    const { data } = await axios.get('articles/feed');
    return data.articles;
})

export const favoriteArticle = createAsyncThunk('articles/favoriteArticles',async (slug) => {
    const { data } = await axios.post(`articles/${slug}/favorite`);
    return data.articles;
})

export const unFavoriteArticle = createAsyncThunk('articles/unFavoriteArticles',async (slug) => {
    const { data } = await axios.delete(`articles/${slug}/favorite`);
    return data.articles;
})

export const createArticle = createAsyncThunk('articles/createArticle',async (article) => {
    const { data } = await axios.post('articles');
    return data.articles;
})

export const updateArticle = createAsyncThunk('articles/updateArticle',async (slug) => {
    const { data } = await axios.put(`articles/${slug}`);
    return data.articles;
})

export const deleteArticle = createAsyncThunk('articles/favoriteArticles',async (slug) => {
    const { data } = await axios.delete(`articles/${slug}`);
    return data.articles;
})


const articleSlice = createSlice({
    name:"articles",
    initialState,
    reducers : {
    },
    extraReducers(builder) {
        builder
            .addCase(fetchArticles.pending, (state, action)=> {
                state.status = "loading"
            })
            .addCase(fetchArticles.fulfilled, (state, action)=> {
                state.status = "succeeded";
                state.articles = action.payload
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
              })
            .addCase(fetchMyFeed.fulfilled, (state, action)=> {
                state.status = "succeeded";
                state.myFeed = action.paylaod;
            })
            .addCase(favoriteArticle.fulfilled, (state, action)=> {
                state.articles = action.payload;
            })
    }
})


export default articleSlice.reducer;

export const selectGlobalFeed = state => state.articles.articles;

export const selectMyFeed = state =>  state.articles.myFeed;

export const selectFavoritedArticles = state => 
    state.articles.articles.filter(article => article.favorited)

export const selectMyArticles  = (state,username) => 
    state.articles.articles.filter(article => article.author.username === username)

export const selectArticleBySlug = (state, slug) => 
    state.articles.articles.find(article => article.slug === slug)
