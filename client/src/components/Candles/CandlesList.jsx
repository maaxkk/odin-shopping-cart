import React from 'react';
import CandleItem from './CandleItem.jsx';
import classes from '../../styles/CandlesList.module.css';
import { useCandles, useSortedCandles } from '../../hooks/useCandles.js';
import { useSelector } from 'react-redux';

function CandlesList({ candles, limit }) {
    const filter = useSelector(state => state.filter);
    let filteredCandles = useCandles(candles, filter.category, filter.query, filter.currentPage, filter.sort, limit);
    return (
        <div className={classes.mainContent}>
            <h2 className={''}>All candles</h2>
            <div className={classes.candlesList}>
                {filteredCandles
                    ? filteredCandles.map(candle => <CandleItem key={candle.id} {...candle} />)
                    : candles.map(candle => <CandleItem key={candle.id} {...candle} />)}
            </div>
        </div>
    );
}

export default CandlesList;
