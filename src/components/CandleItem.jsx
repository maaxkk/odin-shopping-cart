import React, {useContext} from 'react';
import classes from '../styles/CandleItem.module.css'
import {CartContext} from "./AppRouter.jsx";

function CandleItem({title, src, category, price, id}) {
    const {cart, addItem} = useContext(CartContext)
    let itemCounter = cart.itemsId.hasOwnProperty(id) ?
        <>
            Add <span className={classes.itemCounter}>{cart.itemsId[id]}</span>
        </>
        : 'Add'
    return (
        <div className={classes.candle}>
            <img className={classes.candleImg} src={src} alt="Image of candle"/>
            <div className={classes.titleWrapper}>
                <h3 className={classes.title}>{title}</h3>
                <p className={classes.category}>Category: <strong>{category[1]}</strong></p>
            </div>
            <div className={classes.buyWrapper}>
                <p className={classes.price}>{price}$</p>
                <button className={classes.btnAdd}
                        onClick={(() => addItem(price, id))}
                >
                    <i className={'fa fa-plus'}></i>{itemCounter}</button>
            </div>
        </div>
    );
}

export default CandleItem;