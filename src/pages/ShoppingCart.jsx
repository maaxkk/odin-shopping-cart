import React, {useContext} from 'react';
import data from '../utils/data.js'
import classes from '../styles/ShoppingCart.module.css'
import Navbar from "../components/UI/Navbar/Navbar.jsx";
import {CartContext} from "../components/AppRouter.jsx";

import CartItem from "../components/UI/CartItem/CartItem.jsx";
import {FaShoppingCart} from "react-icons/fa";

function ShoppingCart() {
    const {cart, addItem, removeItem, removeWholeItem, setCart} = useContext(CartContext)
    const itemsInCart = data.filter(item => {
        if (cart.itemsId.hasOwnProperty(item.id)) return item
    })
    function clearCart() {
        setCart(prevCart => ({count: 0, totalPrice: 0, itemsId: {}}))
    }

    return (
        <>
            <Navbar/>
            <div className={classes.mainContent}>
                <div className={classes.cartTitle}>
                    <h2 className={classes.title}>
                        <FaShoppingCart/>
                        Shopping cart</h2>
                    <p className={classes.clear} onClick={clearCart}>
                        <i className={'fa fa-trash'}>
                        </i>Clear cart
                    </p>
                </div>
                <div className={classes.candlesList}>
                    {itemsInCart.map(item =>
                        <CartItem key={item.id}
                                  title={item.title}
                                  count={cart.itemsId[item.id]}
                                  price={item.price}
                                  addItem={() => addItem(item.price, item.id)}
                                  removeItem={() => removeItem(item.price, item.id)}
                                  removeWholeItem={() => removeWholeItem(item.price, item.id)}
                        />
                    )}
                </div>
            </div>
        </>
    );
}

export default ShoppingCart;