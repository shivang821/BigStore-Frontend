import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
    name: 'User',
    initialState: {
        loading: false,
        error: null,
        isAuthenticate: false,
        user: null,
        isUpdated: false
    },
    reducers: {
        USER_REQUEST: (state) => {
            state.loading = true;
            state.isAuthenticate = false;
        },
        USER_SUCCESS: (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.isAuthenticate = true;
        },
        USER_FAIL: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.isAuthenticate = false;
        },
        USER_RESET: (state) => {
            state.error = null;
        },
        LOGOUT_SUCCESS: (state, action) => {
            state.loading = false;
            state.user = null;
            state.isAuthenticate = false
        },
        LOGOUT_FAIL: (state, action) => {
            state.error = action.payload;
            state.loading = false
        },
        UPDATE_SUCCESS: (state, action) => {
            state.loading = false
            state.user = action.payload;
            state.isUpdated = true;
            state.isAuthenticate = true
        },
        UPDATE_FAIL: (state, action) => {
            state.error = action.payload;
            state.loading = false
            state.isUpdated = false;
            state.isAuthenticate = false
        }
    }
})

export const { USER_FAIL, USER_REQUEST, USER_RESET, USER_SUCCESS, LOGOUT_SUCCESS, LOGOUT_FAIL, UPDATE_FAIL, UPDATE_SUCCESS } = userReducer.actions;
export default userReducer.reducer