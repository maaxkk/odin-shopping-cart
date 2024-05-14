import React from 'react';

import emptyCard from '../../../assets/empty-cart.png'
import classes from './EmptyCart.module.css'
import {Link} from "react-router-dom";

function CartEmpty() {
    return (
        <>
            <div className={classes.cartContent}>
                <h2>Cart is empty 😕</h2>
                <p>
                    Most likely, you haven't ordered a candles yet.<br/>
                    To order a candle, go to the main page.
                </p>
                <img data-testid={'emptyCart-el'} className={classes.emptyCartImg} src={emptyCard} alt="Empty cart"/>
                <Link to="/" className="button button--black">
                    <button className={classes.btnBack}>Back</button>
                </Link>
            </div>
        </>
    )
}

export default CartEmpty;