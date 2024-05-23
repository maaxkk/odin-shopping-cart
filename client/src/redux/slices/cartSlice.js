import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    count: 0,
    totalPrice: 0,
    items: [],
};

export const fetchCandlesInCart = createAsyncThunk('cart/fetchCartCandles', async userId => {
    const response = await axios.get('api/cart/summary', { params: { userId } });
    return response.data;
});

export const addCandle = createAsyncThunk('cart/add', async params => {
    const { userId, candleId } = params;
    const response = await axios.post('api/cart/add', { userId, candleId });
    return response.data;
});

export const removeCandle = createAsyncThunk('cart/remove', async params => {
    const { userId, candleId } = params;
    const response = await axios.post('api/cart/remove', { userId, candleId });
    return response.data;
});

export const checkout = createAsyncThunk('cart/checkout', async userId => {
    const response = await axios.post('api/cart/checkout', { userId });
    return response.data;
});

export const clearCart = createAsyncThunk('cart/clear', async userId => {
    const response = await axios.delete('api/cart/clear/', { params: { userId } });
    return response.data;
});

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCartUI(state) {
            state.items = [];
            state.count = 0;
            state.totalPrice = 0;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCandlesInCart.pending, state => {
                state.items = [];
            })
            .addCase(fetchCandlesInCart.fulfilled, (state, action) => {
                console.log(action.payload);
                state.items = action.payload.candlesWithAmount;
                state.count = action.payload.totalCount;
                state.totalPrice = action.payload.totalPrice;
            })
            .addCase(fetchCandlesInCart.rejected, state => {
                state.items = [];
            })
            .addCase(addCandle.fulfilled, (state, action) => {
                let newItem = action.payload;
                const itemInCart = state.items.find(obj => obj.id === newItem.id);
                if (itemInCart) {
                    itemInCart.amount++;
                } else {
                    state.items.push(newItem);
                }
                state.totalPrice += newItem.price;
                state.count++;
            })
            .addCase(removeCandle.fulfilled, (state, action) => {
                let currItem = action.payload;
                const itemInCart = state.items.find(obj => obj.id === currItem.id);
                itemInCart.amount--;
                if (itemInCart.amount === 0) {
                    state.items = state.items.filter(obj => obj.id !== itemInCart.id);
                }
                state.totalPrice -= currItem.price;
                state.count--;
            })
            .addCase(checkout.fulfilled, (state, action) => {
                const nextUrl = action.payload.url;
                window.location.href = nextUrl;
            })
            .addCase(clearCart.fulfilled, (state, action) => {
                state.items = action.payload.items;
                state.count = action.payload.count;
                state.totalPrice = action.payload.totalPrice;
            });
    },
});

export const { clearCartUI } = cartSlice.actions;

export default cartSlice.reducer;
