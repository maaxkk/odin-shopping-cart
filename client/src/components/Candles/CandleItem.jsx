import React from 'react';
import classes from '../../styles/CandleItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice.js';

function CandleItem({ title, imgsrc, category, price, id }) {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    let itemCounter = cart.itemsId.hasOwnProperty(id) ? (
        <>
            Add <span className={classes.itemCounter}>{cart.itemsId[id]}</span>
        </>
    ) : (
        'Add'
    );
    const categories = category.split(',');
    return (
        <div className={classes.candle}>
            <img className={classes.candleImg} data-testid={'img-el'} src={imgsrc} alt='Image of candle' />
            <div className={classes.titleWrapper}>
                <h3 className={classes.title}>{title}</h3>
                <p className={classes.category}>
                    Category: <strong>{categories[1]}</strong>
                </p>
            </div>
            <div className={classes.buyWrapper}>
                <p className={classes.price}>{price}$</p>
                <button className={classes.btnAdd} onClick={() => dispatch(addItem({ price, id }))}>
                    <i className={'fa fa-plus'}></i>
                    {itemCounter}
                </button>
            </div>
        </div>
    );
}

export default CandleItem;
