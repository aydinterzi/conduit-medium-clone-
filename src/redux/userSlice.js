import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    currentUser: JSON.parse(localStorage.getItem("user")) ?? null,
    loading: false,
    error: false,
};

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers: {
        loginStart : (state) => {
            state.loading = true;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
            localStorage.setItem("user",JSON.stringify(action.payload));
        },
        loginFailure: (state) => {
            state.loading = false;
            state.error = true;
        },
        logout: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = false;
        },
        updateUser: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
            localStorage.setItem("user",JSON.stringify(action.payload));
        }
    }

})

export const {loginStart, loginFailure, loginSuccess, updateUser} = userSlice.actions;
export default userSlice.reducer;