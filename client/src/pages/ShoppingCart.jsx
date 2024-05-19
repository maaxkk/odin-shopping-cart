import React from 'react';
import classes from '../styles/ShoppingCart.module.css';

import CartItem from '../components/UI/CartItem/CartItem.jsx';
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { checkout, clearCart } from '../redux/slices/cartSlice.js';
import EmptyCart from '../components/UI/EmptyCart/EmptyCart.jsx';
import NoAccess from './NoAccess.jsx';
import { IoIosArrowBack } from 'react-icons/io';

function ShoppingCart() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth);

    if (!user.isAuth) {
        return (<NoAccess />);
    }

    function clearCartHandler() {
        console.log(user);
        dispatch(clearCart(user.userId));
    }

    function checkoutHandle() {
        dispatch(checkout(user.userId));
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
                {cart.count > 0 &&
                    <>
                        <div className={classes.totalWrapper}>
                            <p>Total candles: <strong>{cart.count} pcs</strong></p>
                            <p className={classes.totalPriceP}>Total price: <span
                                className={classes.totalPrice}>{cart.totalPrice} €</span></p>
                        </div>
                        <div className={classes.totalWrapper}>
                            <button className={classes.goBack}><IoIosArrowBack />Back</button>
                            <button onClick={checkoutHandle} className={classes.payNow}>Pay now</button>
                        </div>
                    </>
                }
            </div>
        </>
    );
}

export default ShoppingCart;
