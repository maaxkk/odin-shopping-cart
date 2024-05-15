import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0,
    totalPrice: 0,
    itemsId: {},
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            let itemId = action.payload.id;
            state.itemsId[itemId] = state.itemsId[itemId] ? state.itemsId[itemId] + 1 : 1;
            state.count++;
            state.totalPrice += action.payload.price;
        },
        removeItem(state, action) {
            let itemId = action.payload.id;
            state.itemsId[itemId]--;
            if (state.itemsId[itemId] === 0) {
                delete state.itemsId[itemId];
            }
            state.count--;
            state.totalPrice -= action.payload.price;
        },
        removeWholeItem(state, action) {
            let itemId = action.payload.id;
            let totalPrice = state.itemsId[itemId] * action.payload.price;
            let totalItemCount = state.itemsId[itemId];
            delete state.itemsId[itemId];
            state.totalPrice -= totalPrice;
            state.count -= totalItemCount;
        },
        clearCart(state) {
            state.itemsId = {};
            state.count = 0;
            state.totalPrice = 0;
        },
    },
});

export const { clearCart, addItem, removeItem, removeWholeItem } = cartSlice.actions;

export default cartSlice.reducer;
