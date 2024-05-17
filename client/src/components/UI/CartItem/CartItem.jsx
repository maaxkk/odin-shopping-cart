import React from 'react';
import candleIcon from '../../../assets/candle.png';
import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { addCandle } from '../../../redux/slices/cartSlice.js';

function CartItem({ title, count, id, price }) {
    const dispatch = useDispatch();

    function ToDo() {
        console.log('Will be done soon :) ');
    }

    return (
        <div className={classes.shopItem}>
            <div className={classes.item}>
                <img className={classes.itemImg} src={candleIcon} alt={'Small image of candle'} />
                <h2 className={classes.title}>{title}</h2>
            </div>
            <div className={classes.btns}>
                <button className={classes.minus} onClick={() => ToDo()}>
                    <i className={'fa fa-minus'}></i>
                </button>
                <p className={classes.count}>{count}</p>
                <button className={classes.plus} onClick={() => dispatch(addCandle(1, 1))}>
                    <i className={'fa fa-plus'}></i>
                </button>
                <p className={classes.totalPrice}>{count * price} $</p>
                <button className={classes.close} onClick={() => ToDo()}>
                    <i className={'fa fa-close'}></i>
                </button>
            </div>
        </div>
    );
}

export default CartItem;
