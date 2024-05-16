import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classes from '../styles/SignUp.module.css';

function SignUp() {
    const location = useLocation();
    let btnPlaceholder = 'Sign up';
    let btnLink = '/registration';
    if (location.pathname === '/registration') {
        btnPlaceholder = 'Go back';
        btnLink = '/';
    }
    return (
        <Link to={`${btnLink}`}>
            <button className={classes.signup}>{btnPlaceholder}</button>
        </Link>
    );
}

export default SignUp;
