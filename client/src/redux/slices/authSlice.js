import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuth: false,
    userId: 1,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.isAuth = action.payload;
        },
        setUserId: (state, action) => {
            state.userId = action.payload;
        },
    },
});

export const { setAuth, setUserId } = authSlice.actions;

export default authSlice.reducer;
