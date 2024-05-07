import React from 'react';
import MyInput from "../Input/MyInput.jsx";

function MyRadio({category, type, name, ...otherProps}) {
    return (
        <MyInput {...otherProps}
                 category={category}
                 type={'radio'}
                 name={name}>
        </MyInput>
    );
}

export default MyRadio;