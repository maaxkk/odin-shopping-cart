import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    category: 'All',
    query: '',
    sort: '',
    currentPage: '',
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategory(state, action) {
            state.category = action.payload;
        },
        setSort(state, action) {
            state.sort = action.payload;
        },
        setQuery(state, action) {
            state.query = action.payload;
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
    }
})

export const {setCategory, setSort, setQuery, setCurrentPage} = filterSlice.actions;

export default filterSlice.reducer;