import {useEffect, useState} from "react";
import data from "../utils/data.js";
import Navbar from "../components/UI/Navbar/Navbar.jsx";
import CandlesFilter from "../components/CandlesFilter.jsx";
import CandlesList from "../components/CandlesList.jsx";
import {getPageCount} from "../utils/pages.js";
import Pagination from "../components/pagination/Pagination.jsx";


function Candles() {
    const [candles, setCandles] = useState(data)
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(6);
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState({
        category: 'All',
        query: '',
        sort: '',
    })

    useEffect(() => {
        setTotalPages(getPageCount(candles.length, limit))
    }, [candles, limit]);

    const categories = []
    candles.forEach((candle) => {
        for (let candleCategory of candle.category) {
            if (categories.includes(candleCategory)) continue;
            categories.push(candleCategory);
        }
    })

    console.log(filter)

    return (
        <div>
            <Navbar filter={filter} setFilter={setFilter}/>
            <CandlesFilter categories={categories} filter={filter} setFilter={setFilter}/>
            <CandlesList candles={candles} filter={filter} page={page} limit={limit}/>
            <Pagination totalPages={totalPages} page={page} setPage={setPage}/>
        </div>
    )
}

export default Candles
