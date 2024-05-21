import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../redux/slices/cartSlice.js';
import success from '../assets/lottie/success.json';
import classes from '../styles/SuccessPayment.module.css';
import Lottie from 'lottie-react';

function SuccessPayment() {
    const userId = useSelector(state => state.auth.userId);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(clearCart(userId));
    }, []);
    return (
        <div className={classes.wrapper}>
            <h3 style={classes.paymentTitle}>Payment was successfully proceed</h3>
            <Lottie animationData={success} className={classes.animation} />
        </div>
    );
}

export default SuccessPayment;
