import {configureStore} from "@reduxjs/toolkit";

import userReducer from './userSlice';
import articleReducer from './articleSlice';


const store = configureStore({
    reducer :{
        user:userReducer,
        article:articleReducer
    }
})

export default store;