import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <Link to={'/login'}>
            <button className={'btn'}>Login</button>
        </Link>
    );
}

export default Login;
