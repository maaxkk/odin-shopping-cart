import React from 'react';
import Skeleton from "./Skeleton.jsx";

function SkeletonList() {
    return (
        <div style={{padding: '0 2em 2em 2em'}}>
            <h2>All candles</h2>
            <div className={'skeletonCandles'}>
                {[1, 2, 3].map((skeleton, index) => (<Skeleton key={index}/>))}
            </div>
        </div>
    );
}

export default SkeletonList;