import React, { useState } from 'react';
import classes from '../../styles/Registration.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { inputs } from '../../utils/inputs.js';
import MyInput from '../UI/Input/MyInput.jsx';
import { registration } from '../../API/userAPI.js';
import { setAuth } from '../../redux/slices/authSlice.js';

function RegistrationForm() {
    const [personData, setPersonData] = useState({
        email: '',
        password: '',
        fullName: '',
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function signUp() {
        try {
            const response = await registration(personData.email, personData.password, personData.fullName);
            navigate('/');
            dispatch(setAuth(true));
        } catch (e) {
            alert(e.response.data.message);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        signUp();
    }

    function handleChange(e) {
        setPersonData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    return (
        <div className={classes.wrapper}>
            <h2 className={classes.title}>Sign up form:</h2>
            <form onSubmit={handleSubmit} className={classes.regForm}>
                {inputs.map(input => (
                    <MyInput
                        key={input.id}
                        {...input}
                        value={personData[input.name]}
                        onChange={handleChange}
                        formInput={true}
                    />
                ))}
                <input type={'submit'} className={classes.signUp} value={'Sign up'} />
            </form>
        </div>
    );
}

export default RegistrationForm;
