import {useMemo} from "react";
import {getCurrentPageCandles} from "../utils/currentPage.js";
import sortCandles from "../utils/sort.js";

export function useSortedCandles(candles, category, sort) {
    const sortedCandles = useMemo(() => {
        let tmpSortedCandles;
        if (category) {
            tmpSortedCandles = candles.filter(candle => candle.category.includes(category))
        }
        if (sort) {
            tmpSortedCandles = sortCandles(tmpSortedCandles, sort)
        }
        return tmpSortedCandles
    }, [candles, category, sort])

    return sortedCandles;
}

export function useCandles(candles, category, query, page, sort, limit) {
    const sortedCandles = useSortedCandles(candles, category, sort)
    const searchedCategoryCandles = useMemo(() => {
        let searchedCandles = sortedCandles.filter(candle => candle.title.toLowerCase()
            .includes(query.toLowerCase()))

        return getCurrentPageCandles(searchedCandles, page, limit)
    }, [query, sortedCandles, page, sort])
    return searchedCategoryCandles
}


