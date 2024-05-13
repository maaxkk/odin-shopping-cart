import React, {createContext, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Candles from "../pages/Candles.jsx";
import ShoppingCart from "../pages/ShoppingCart.jsx";

export const CartContext = createContext()

function AppRouter(props) {

    return (
        <>
            <Routes>
                <Route path={'/'} element={<Candles/>}></Route>
                <Route path={'/cart'} element={<ShoppingCart/>}></Route>
            </Routes>
        </>
    );
}

export default AppRouter;