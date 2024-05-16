import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './UI/Navbar/Navbar.jsx';
import publicRoutes from '../router/router.js';

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
