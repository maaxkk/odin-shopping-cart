import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    category: 'All',
    query: '',
    sort: '',
    currentPage: 1,
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategory(state, action) {
            state.category = action.payload.value;
        },
        setSort(state, action) {
            state.sort = action.payload.value;
        },
        setQuery(state, action) {
            state.query = action.payload.value;
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload.value;
        },
        setFilters(state, action) {
            state.currentPage = Number(action.payload.currentPage);
            state.query = action.payload.query;
            state.category = action.payload.category;
            state.sort = action.payload.sort;
        },
    },
});

export const { setFilters, setCategory, setSort, setQuery, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;
