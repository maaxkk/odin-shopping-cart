import React from 'react';
import classes from '../styles/ShoppingCart.module.css';

import CartItem from '../components/UI/CartItem/CartItem.jsx';
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../redux/slices/cartSlice.js';
import EmptyCart from '../components/UI/EmptyCart/EmptyCart.jsx';

function ShoppingCart() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    function clearCartHandler() {
        dispatch(clearCart());
    }

    return (
        <>
            <div className={classes.mainContent}>
                {cart.count === 0 && <EmptyCart />}
                {cart.count > 0 && (
                    <div className={classes.cartTitle}>
                        <h2 className={classes.title}>
                            <FaShoppingCart />
                            Shopping cart
                        </h2>
                        <p className={classes.clear} onClick={clearCartHandler}>
                            <i className={'fa fa-trash'}></i>Clear cart
                        </p>
                    </div>
                )}
                <div className={classes.candlesList}>
                    {cart.items.map(item => (
                        <CartItem
                            key={item.id}
                            title={item.title}
                            count={item.amount}
                            price={item.price}
                            id={item.id}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default ShoppingCart;
