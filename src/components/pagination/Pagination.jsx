import React from 'react';
import {getPagesArray} from "../../utils/pages.js";
import classes from '../../styles/Pagination.module.css'
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage} from "../../redux/slices/filterSlice.js";

function Pagination({totalPages}) {
    let pagesArray = getPagesArray(totalPages)
    const page = useSelector(state => state.filter.currentPage)
    const dispatch = useDispatch();
    return (
        <div className={classes.pageWrapper}>
            {pagesArray.map(p =>
                <span
                    key={p}
                    onClick={() => dispatch(setCurrentPage({value: p}))}
                    className={p === page ?
                        `${classes.pageCurrent} ${classes.page}` : classes.page}
                >
                    {p}
                </span>
            )}
        </div>
    );
}

export default Pagination;