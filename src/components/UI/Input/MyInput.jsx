import React from 'react';
import classes from './MyInput.module.css';

function MyInput(props) {
    if (props.type === 'radio') {
        return (
            <>
                <input id={props.category} className={classes.radioCategory} {...props} />
                <label htmlFor={props.category} className={classes.labelCategory}>
                    {props.category}
                </label>
            </>
        );
    }

    return <input {...props} className={classes.myInput} />;
}

export default MyInput;
