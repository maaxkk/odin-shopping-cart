import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice.js';
import filterReducer from './slices/filterSlice.js';
import authReducer from './slices/authSlice.js';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        filter: filterReducer,
    },
});
