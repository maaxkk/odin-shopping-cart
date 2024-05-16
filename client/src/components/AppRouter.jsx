import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './UI/Navbar/Navbar.jsx';
import { publicRoutes, privateRoutes } from '../router/router.js';
import { useSelector } from 'react-redux';

function AppRouter() {
    const isAuth = useSelector(state => state.auth.isAuth);

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
