import React from 'react';
import classes from '../styles/Registration.module.css';

function Registration() {
    return (
        <div className={classes.wrapper}>
            <h2 className={classes.title}>Sign up form:</h2>
            <form className={classes.regForm}>
                <input className={classes.regInput} type='email' placeholder={'Enter your email..'} />
                <input className={classes.regInput} type='text' placeholder={'Enter your password...'} />
                <input className={classes.regInput} type='text' placeholder={'Enter your fullname...'} />
                <button className={classes.signUp}>Sign up</button>
            </form>
        </div>
    );
}

export default Registration;
