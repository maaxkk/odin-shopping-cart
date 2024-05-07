import React from 'react';
import CandleItem from "./CandleItem.jsx";
import classes from "../styles/CandlesList.module.css";
import {useCandles} from "../hooks/useCandles.js";

function CandlesList({candles, filter, page, limit}) {
    let filteredCandles = useCandles(candles, filter.category, filter.query, page, filter.sort, limit)
    return (
        <div className={classes.mainContent}>
            <h2 className={''}>All candles</h2>
            <div className={classes.candlesList}>
                {filteredCandles ?
                    filteredCandles.map(candle =>
                        <CandleItem key={candle.id} {...candle}/>
                    )
                    :
                    candles.map(candle =>
                        <CandleItem key={candle.id} {...candle}/>
                    )
                }
            </div>
        </div>
    );
}

export default CandlesList;