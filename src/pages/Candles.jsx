import {useEffect, useState} from "react";
import Navbar from "../components/UI/Navbar/Navbar.jsx";
import CandlesFilter from "../components/CandlesFilter.jsx";
import CandlesList from "../components/CandlesList.jsx";
import {getPageCount} from "../utils/pages.js";
import Pagination from "../components/pagination/Pagination.jsx";
import CandlesService from "../API/PostService.js";
import Skeleton from "../components/UI/Skeleton/Skeleton.jsx";


function Candles() {
    const [candles, setCandles] = useState([])
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(6);
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState({
        category: 'All',
        query: '',
        sort: '',
    })
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        CandlesService.getAll()
            .then(candleArr => {
                setCandles(candleArr)
                setIsLoading(false);
            })
    }, [])

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

    const skeletonCandles = [1,2,3].map(skeleton => (<Skeleton/>))
    const passedCandlesList = isLoading ? skeletonCandles : candles;

    return (
        <div>
            <Navbar filter={filter} setFilter={setFilter}/>
            <CandlesFilter categories={categories} filter={filter} setFilter={setFilter}/>
            <CandlesList candles={passedCandlesList} filter={filter} page={page} limit={limit} isLoading={isLoading}/>
            <Pagination totalPages={totalPages} page={page} setPage={setPage}/>
        </div>
    )
}

export default Candles
