import React from 'react';

import emptyCard from '../../../assets/empty-cart.png'
import classes from './EmptyCart.module.css'
import {Link} from "react-router-dom";

function CartEmpty() {
    return (
        <>
            <div className={classes.cartContent}>
                <h2>Cart is empty <icon>😕</icon></h2>
                <p>
                    Most likely, you haven't ordered a pizza yet.<br/>
                    To order a pizza, go to the main page.
                </p>
                <img className={classes.emptyCartImg} src={emptyCard} alt="Empty cart"/>
                <Link to="/" className="button button--black">
                    <button className={classes.btnBack}>Back</button>
                </Link>
            </div>
        </>
    )
}

export default CartEmpty;