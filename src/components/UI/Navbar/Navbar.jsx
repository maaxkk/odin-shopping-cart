import React, {useContext} from 'react';
import candleLogo from '../../../assets/candle.png'
import classes from './Navbar.module.css'
import MyInput from "../Input/MyInput.jsx";
import MyButton from "../Button/MyButton.jsx";
import {Link} from "react-router-dom";
import {CartContext} from "../../AppRouter.jsx";

function Navbar({filter, setFilter}) {
    const {cart, addItem} = useContext(CartContext)

    function handleSearchCandle(e) {
        setFilter(prevFilter => (
            {...prevFilter, query: e.target.value}
        ))
    }

    return (
        <header className={classes.header}>
            <Link to={'/'}>
                <div className={classes.logoWrapper}>
                    <img className={classes.logo} src={candleLogo} alt={'Image of logo'}/>
                    <div>
                        <h1 className={classes.title}>REACT CANDLES V2</h1>
                        <p className={classes.subtitle}>made with love ❤ </p>
                    </div>
                </div>
            </Link>
            <div className={classes.inputWrapper}>
                <MyInput onChange={handleSearchCandle} data-testid={'input-el'}
                         placeholder={'Search candles...'}/>
            </div>
            <div className={classes.cartButton}>
                <Link to={'/cart'}>
                    <MyButton data-testid={'mybutton-el'} price={cart.totalPrice} count={cart.count}/>
                </Link>
            </div>
        </header>
    );
}

export default Navbar;