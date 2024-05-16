import { useEffect, useRef, useState } from 'react';
import CandlesFilter from '../components/Candles/CandlesFilter.jsx';
import CandlesList from '../components/Candles/CandlesList.jsx';
import { getPageCount } from '../utils/pages.js';
import Pagination from '../components/pagination/Pagination.jsx';
import CandlesService from '../API/PostService.js';
import SkeletonList from '../components/UI/Skeleton/SkeletonList.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { setFilters } from '../redux/slices/filterSlice.js';

function Candles() {
    const [candles, setCandles] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(6);
    const [isLoading, setIsLoading] = useState(false);
    const params = useSelector(state => state.filter);
    const [queryParams, setQueryParams] = useSearchParams();
    const dispatch = useDispatch();
    const isMounted = useRef();

    useEffect(() => {
        if (window.location.search) {
            let obj = {};
            let query = window.location.search.substring(1);
            let parameters = query.split('&');
            for (const oneParam of parameters) {
                const pair = oneParam.split('=');
                obj[pair[0]] = pair[1];
            }
            dispatch(setFilters({ ...obj }));
        }
    }, []);

    useEffect(() => {
        if (isMounted.current) {
            for (let key in params) {
                setQueryParams(prev => {
                    prev.set(key, params[key]);
                    return prev;
                });
            }
        }
    }, [params]);

    useEffect(() => {
        setIsLoading(true);
        CandlesService.getAll().then(candleArr => {
            setCandles(candleArr);
            setIsLoading(false);
        });
        isMounted.current = true;
    }, []);

    useEffect(() => {
        setTotalPages(getPageCount(candles.length, limit));
    }, [candles, limit]);

    const categories = ['All'];
    for (let candle of candles) {
        if (categories.includes(candle.category['title'])) {
            continue;
        }
        categories.push(candle.category['title']);
    }

    return (
        <div>
            <CandlesFilter categories={categories} />
            {isLoading ? <SkeletonList /> : <CandlesList candles={candles} limit={limit} />}
            <Pagination totalPages={totalPages} />
        </div>
    );
}

export default Candles;
