import React, { useState } from 'react';
import classes from '../../styles/LoginForm.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../redux/slices/authSlice.js';
import { login } from '../../API/userAPI.js';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function Login() {
        try {
            const response = await login(email, password);
            navigate('/');
            dispatch(setAuth(true));
        } catch (e) {
            alert(e.response.data.message);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleChange(e, setState) {
        setState(e.target.value);
    }

    return (
        <div className={classes.wrapper}>
            <h2 className={classes.title}>Login form:</h2>
            <form onSubmit={handleSubmit} className={classes.regForm}>
                <input value={email}
                       onChange={e => handleChange(e, setEmail)}
                       className={classes.regInput} type="email" placeholder={'Enter your email..'} />
                <input value={password}
                       onChange={e => handleChange(e, setPassword)}
                       className={classes.regInput} type="password" placeholder={'Enter your password...'} />
                <button onClick={Login} className={classes.signUp}>Login</button>
            </form>
        </div>
    );
}

export default LoginForm;
