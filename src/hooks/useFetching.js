import CandlesService from '../API/PostService.js';

function useFetching() {
    const candles = CandlesService.getAll();
}
