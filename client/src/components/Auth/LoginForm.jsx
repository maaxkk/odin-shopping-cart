import React, { useState } from 'react';
import classes from '../../styles/LoginForm.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../redux/slices/authSlice.js';
import { inputs } from '../../utils/inputs.js';
import MyInput from '../UI/Input/MyInput.jsx';
import { login } from '../../API/userAPI.js';

function LoginForm() {
    const [personData, setPersonData] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function loginAccount() {
        try {
            const response = await login(personData.email, personData.password);
            navigate('/');
            dispatch(setAuth(true));
        } catch (error) {
            alert(error.response.data.message);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        loginAccount();
    }

    function handleChange(e) {
        setPersonData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    return (
        <div className={classes.wrapper}>
            <h2 className={classes.title}>Login form:</h2>
            <form onSubmit={handleSubmit} className={classes.regForm}>
                {inputs.slice(0, 2).map(input => (
                    <MyInput
                        key={input.id}
                        {...input}
                        formInput={true}
                        value={personData[input.name]}
                        onChange={handleChange}
                    />
                ))}
                <input className={classes.login} value={'Login'} type={'submit'} />
            </form>
        </div>
    );
}

export default LoginForm;
