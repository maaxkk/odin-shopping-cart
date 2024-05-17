import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    count: 0,
    totalPrice: 0,
    items: [],
};

export const fetchCandlesInCart = createAsyncThunk('cart/fetchCartCandles', async (userId) => {
    const response = await axios.get('api/cart/summary', {params: { userId } });
    console.log(response);
    return response.data;
});

export const addCandle = createAsyncThunk('cart/add', async (params) => {
    const {userId, candleId} = params;
    const response = await axios.post('api/cart/add', {userId, candleId})
    return response.data
})

export const clearCart = createAsyncThunk('cart/clear', async() => {
    const response = await axios.post('api/cart/clear')
    console.log(response);
    return response
})

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCandlesInCart.pending, (state) => {
                state.items = [];
            })
            .addCase(fetchCandlesInCart.fulfilled, (state, action) => {
                console.log(action.payload);
                state.items = action.payload.candlesInCart;
                state.count = action.payload.totalCount;
                state.totalPrice = action.payload.totalPrice;

            })
            .addCase(fetchCandlesInCart.rejected, (state) => {
                state.items = [];
            })
            .addCase(addCandle.fulfilled, (state, action) => {
                let newItem = action.payload;
                const itemInCart = state.items.find(obj => obj.id === newItem.id)
                if (itemInCart) {
                    itemInCart.amount++;
                } else {
                    state.items.push(newItem)
                }
                state.totalPrice += newItem.price;
                state.count++;
            })
            .addCase(clearCart.fulfilled, (state) => {
                state.items = [];
            })
    },
});

export default cartSlice.reducer;
