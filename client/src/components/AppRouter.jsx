import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './UI/Navbar/Navbar.jsx';
import { publicRoutes, privateRoutes } from '../router/router.js';
import { useDispatch, useSelector } from 'react-redux';
import { check } from '../API/userAPI.js';
import { setAuth } from '../redux/slices/authSlice.js';
import { fetchCandlesInCart } from '../redux/slices/cartSlice.js';

function AppRouter() {
    const isAuth = useSelector(state => state.auth.isAuth);
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            check().then(data => {
                dispatch(setAuth(true));
                dispatch(fetchCandlesInCart(3))
            }).finally(() => setIsLoading(false));
        }, 1000);
    }, []);

    if (isLoading) {
        return <img style={{margin: 'auto', padding: '10em'}}
            src={'https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif'} />;
    }

    return (
        <>
            <Navbar />
            <Routes>
                {isAuth &&
                    privateRoutes.map((route, index) => (
                        <Route key={index} path={route.path} element={<route.element />} />
                    ))}
                {publicRoutes.map((route, index) => (
                    <Route key={index} path={route.path} element={<route.element />} />
                ))}
            </Routes>
        </>
    );
}

export default AppRouter;
