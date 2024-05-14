import React from 'react';
import classes from '../styles/NotFound.module.css'

function NotFound() {
    return (
        <div className={classes.root}>
            <h1>
                <span className={classes.emoji}>😕</span>
                <br/>
                Not found</h1>
            <p className={classes.description}>Unfortunately, this page is missing</p>
        </div>
    );
}

export default NotFound;