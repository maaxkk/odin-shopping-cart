import React from 'react';
import {FaShoppingCart} from "react-icons/fa";
import classes from "./MyButton.module.css";

function MyButton(props) {
    return (
        <button {...props} className={classes.myButton}>
            <span className={classes.price}>{props.price} $</span>
            | <span className={classes.cartIcon}>
            <FaShoppingCart/> {props.count}
            </span>
        </button>
    );
}

export default MyButton;