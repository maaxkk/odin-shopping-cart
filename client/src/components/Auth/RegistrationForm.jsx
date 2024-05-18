import React, { useState } from 'react';
import classes from '../../styles/Registration.module.css';
import { registration } from '../../API/userAPI.js';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../redux/slices/authSlice.js';

function RegistrationForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function signUp() {
        try {
            const response = await registration(email, password, fullName);
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
            <h2 className={classes.title}>Sign up form:</h2>
            <form onSubmit={handleSubmit} className={classes.regForm}>
                <input value={email}
                       onChange={e => handleChange(e, setEmail)}
                       className={classes.regInput} type="email" placeholder={'Enter your email..'} />
                <input value={password}
                       onChange={e => handleChange(e, setPassword)}
                       className={classes.regInput} type="password" placeholder={'Enter your password...'} />
                <input value={fullName}
                       onChange={(e) => handleChange(e, setFullName)}
                       className={classes.regInput} type="text" placeholder={'Enter your fullname...'} />
                <button onClick={signUp} className={classes.signUp}>Sign up</button>
            </form>
        </div>
    );
}

export default RegistrationForm;
