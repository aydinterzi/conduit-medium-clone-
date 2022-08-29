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
            console.log(action.payload);
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
        }
    }

})

export const {loginStart, loginFailure, loginSuccess} = userSlice.actions;
export default userSlice.reducer;