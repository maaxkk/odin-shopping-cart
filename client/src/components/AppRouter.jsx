import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './UI/Navbar/Navbar.jsx';
import { publicRoutes, privateRoutes } from '../router/router.js';
import { useDispatch, useSelector } from 'react-redux';
import { check } from '../API/userAPI.js';
import { setAuth, setUserId } from '../redux/slices/authSlice.js';
import { fetchCandlesInCart } from '../redux/slices/cartSlice.js';
import { jwtDecode } from 'jwt-decode';

function AppRouter() {
    const isAuth = useSelector(state => state.auth.isAuth);
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    let userToken = localStorage.getItem('token');
    let decodeToken;
    if (userToken) decodeToken = jwtDecode(userToken);
    console.log(decodeToken);
    useEffect(() => {
        setTimeout(() => {
            check().then(data => {
                dispatch(setAuth(true));
                if (decodeToken.id) {
                    dispatch(fetchCandlesInCart(decodeToken.id));
                    dispatch(setUserId(decodeToken.id));
                }
            }).finally(() => setIsLoading(false));
        }, 1000);
    }, []);

    if (isLoading) {
        return (
            <>
                <Navbar />
                <div className={'spinnerWrapper'}>
                    <img className={'spinner'}
                         alt={'Gif image of spinner loader'}
                         src={'https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif'} />
                </div>
            </>);
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
