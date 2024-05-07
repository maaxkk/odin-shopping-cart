import React from 'react';
import {getPagesArray} from "../../utils/pages.js";
import classes from '../../styles/Pagination.module.css'

function Pagination({totalPages, page, setPage}) {
    let pagesArray = getPagesArray(totalPages)
    return (
        <div className={classes.pageWrapper}>
            {pagesArray.map(p =>
                <span
                    key={p}
                    onClick={() => setPage(p)}
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