import {useMemo} from "react";
import {getCurrentPageCandles} from "../utils/currentPage.js";

export function useSortedCandles(candles, category) {
    const sortedCandles = useMemo(() => {
        if (category) {
            return candles.filter(candle => candle.category.includes(category))
        }
    }, [candles, category])

    return sortedCandles;
}

export function useCandles(candles, category, query, page, sort, limit) {
    const sortedCandles = useSortedCandles(candles, category)
    const searchedCategoryCandles = useMemo(() => {
        let searchedCandles = sortedCandles.filter(candle => candle.title.toLowerCase()
            .includes(query.toLowerCase()))
        return getCurrentPageCandles(searchedCandles, page, limit)
    }, [query, sortedCandles, page])
    return searchedCategoryCandles
}


