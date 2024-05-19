import React from 'react';
import classes from '../../styles/CandleItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCandle} from '../../redux/slices/cartSlice.js';

function CandleItem({ title, imgSrc, category, price, id }) {
    const cart = useSelector(state => state.cart);
    const isAuth = useSelector(state => state.auth.isAuth);
    const userId = useSelector(state => state.auth.userId);
    const dispatch = useDispatch();
    let findCandle = cart.items.find(obj => obj.id === id)
    let itemCounter = 'Add'
    if (findCandle) {
        itemCounter = <>Add<span className={classes.itemCounter}>{findCandle.amount}</span></>;
    }

    function ToDo() {
        console.log('Will be done soon :) ');
    }

    function handleAddCandle() {
        if (!isAuth) {
            return alert('Please login first')
        }
        dispatch(addCandle({userId: userId, candleId: id}))
    }

    return (
        <div className={classes.candle}>
            <img className={classes.candleImg} data-testid={'img-el'} src={imgSrc} alt='Image of candle' />
            <div className={classes.titleWrapper}>
                <h3 className={classes.title}>{title}</h3>
                <p className={classes.category}>
                    Category: <strong>{category['title']}</strong>
                </p>
            </div>
            <div className={classes.buyWrapper}>
                <p className={classes.price}>{price} €</p>
                <button className={classes.btnAdd} onClick={() => handleAddCandle()}>
                    <i className={'fa fa-plus'}></i>
                    {itemCounter}
                </button>
            </div>
        </div>
    );
}

export default CandleItem;
