import React, { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Candles from '../pages/Candles.jsx';
import ShoppingCart from '../pages/ShoppingCart.jsx';
import NotFound from '../pages/NotFound.jsx';
import Navbar from './UI/Navbar/Navbar.jsx';
import publicRoutes from '../router/router.js';

export const CartContext = createContext();

function AppRouter() {
    return (
        <>
            <Navbar />
            <Routes>
                {publicRoutes.map((route, index) => (
                    <Route key={index} path={route.path} element={<route.element />} />
                ))}
            </Routes>
        </>
    );
}

export default AppRouter;
