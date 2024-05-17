import CandlesService from '../API/index.js';

function useFetching() {
    const candles = CandlesService.getAll();
}
