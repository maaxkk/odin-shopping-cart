import React, {createContext, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Candles from "../pages/Candles.jsx";
import ShoppingCart from "../pages/ShoppingCart.jsx";

export const CartContext = createContext()


function AppRouter(props) {
    const [cart, setCart] = useState({
        count: 0,
        totalPrice: 0,
        itemsId: {},
    })

    function addItem(price, id) {
        setCart(prevCart => {
            let nextItemsIds = {...prevCart.itemsId}
            if (prevCart.itemsId.hasOwnProperty(id)) {
                nextItemsIds[id] += 1;
            } else nextItemsIds[id] = 1;
            return {
                ...prevCart,
                count: prevCart.count + 1,
                totalPrice: prevCart.totalPrice + price,
                itemsId: nextItemsIds,
            };
        })
    }
    console.table(cart)



    // function removeItem(price, id) {
    //     setCart(prevCart => {
    //         let nextCart = {...prevCart};
    //         nextCart.itemsId[id] -= 1;
    //         nextCart.count -= 1;
    //         nextCart.totalPrice -= price;
    //         if (nextCart.itemsId[id] === 0) {
    //             delete nextCart.itemsId[id]
    //         }
    //         return nextCart;
    //     })
    // }

    function removeItem(price, id) {
        setCart(prevCart => {
            let nextCart = {...prevCart};
            let nextCartIds = {...prevCart.itemsId}
            nextCartIds[id] -= 1;
            nextCart.count -= 1;
            nextCart.totalPrice -= price;
            if (nextCartIds[id] === 0) {
                delete nextCartIds[id]
            }
            return {...nextCart, itemsId: nextCartIds};
        })
    }

    function removeWholeItem(price, id) {
        setCart(prevCart => {
            let nextCartIds = {...prevCart.itemsId}
            let totalItemPrice = prevCart.itemsId[id] * price;
            let totalItemCount = prevCart.itemsId[id];
            let nextCart = {...prevCart};
            delete nextCartIds[id];
            nextCart.count -= totalItemCount;
            nextCart.totalPrice -= totalItemPrice;
            return {...nextCart, itemsId: nextCartIds};
        })
    }

    return (
        <>
            <CartContext.Provider value={{cart, addItem, removeItem, removeWholeItem, setCart}}>
                <Routes>
                    <Route path={'/'} element={<Candles/>}></Route>
                    <Route path={'/cart'} element={<ShoppingCart/>}></Route>
                </Routes>
            </CartContext.Provider>
        </>
    );
}

export default AppRouter;