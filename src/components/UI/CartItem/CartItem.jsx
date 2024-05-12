import React from 'react';
import candleIcon from "../../../assets/candle.png";
import classes from "./CartItem.module.css";

function CartItem({title, count, addItem, removeItem, removeWholeItem, price}) {
    return (
        <div className={classes.shopItem}>
            <div className={classes.item}>
                <img className={classes.itemImg} src={candleIcon} alt={'Small image of candle'}/>
                <h2 className={classes.title}>{title}</h2>
            </div>
            <div className={classes.btns}>
                <button className={classes.minus} onClick={removeItem}>
                    <i className={'fa fa-minus'}></i></button>
                <p className={classes.count}>{count}</p>
                <button className={classes.plus} onClick={addItem}>
                    <i className={'fa fa-plus'}></i></button>
                <p className={classes.totalPrice}>{count * price} $</p>
                <button className={classes.close} onClick={removeWholeItem}>
                    <i className={'fa fa-close'}></i></button>
            </div>
        </div>
    );
}

export default CartItem;