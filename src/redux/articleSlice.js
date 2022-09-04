import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    articles: [],
    status: 'idle',
    error: false
}

export const fetchArticles = createAsyncThunk('articles/fetchArticles',async () => {
    const { data } = await axios.get('articles');
    return data.articles;
})
const articleSlice = createSlice({
    name:"article",
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
    }
})


export default articleSlice.reducer;

export const selectGlobalFeed = state => state.article;

export const selectMyFeed = state =>
    state.articles.map(article => article.author.following)

export const selectFavoritedArticles = state => 
    state.articles.map(article => article.favorited)

export const selectMyArticles  = (state,username) => 
    state.articles.map(article => article.author.username === username)

export const selectArticleBySlug = (state, slug) => 
    state.articles.find(article => article.slug === slug)
