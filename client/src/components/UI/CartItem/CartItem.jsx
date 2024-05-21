import React from 'react';
import candleIcon from '../../../assets/candle.png';
import classes from './CartItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCandle, removeCandle } from '../../../redux/slices/cartSlice.js';

function CartItem({ title, count, id, price }) {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.auth.userId);

    function handleAddCandle() {
        dispatch(addCandle({ userId: userId, candleId: id }));
    }

    function handleRemoveCandle() {
        dispatch(removeCandle({ userId: userId, candleId: id }));
    }

    return (
        <div className={classes.shopItem}>
            <div className={classes.item}>
                <img className={classes.itemImg} src={candleIcon} alt={'Small image of candle'} />
                <h2 className={classes.title}>{title}</h2>
            </div>
            <div className={classes.btns}>
                <button className={classes.minus} onClick={() => handleRemoveCandle()}>
                    <i className={'fa fa-minus'}></i>
                </button>
                <p className={classes.count}>
                    <strong>{count}</strong>
                </p>
                <button className={classes.plus} onClick={() => handleAddCandle()}>
                    <i className={'fa fa-plus'}></i>
                </button>
                <p className={classes.totalPrice}>
                    <strong>{count * price} €</strong>
                </p>
                <button className={classes.close}>
                    <i className={'fa fa-close'}></i>
                </button>
            </div>
        </div>
    );
}

export default CartItem;
