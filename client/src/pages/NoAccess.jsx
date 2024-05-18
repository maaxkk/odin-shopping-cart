import React from 'react';
import classes from '../styles/NoAccess.module.css';

function NoAccess() {
    return (
        <div className={classes.root}>
            <h1>
                <span className={classes.emoji}>⛔</span>
                <br />
                No access
            </h1>
            <p className={classes.description}>Please sign up to proceed</p>
        </div>
    );
}

export default NoAccess;