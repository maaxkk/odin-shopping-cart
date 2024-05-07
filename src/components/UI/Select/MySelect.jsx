import React from 'react';
import classes from './MySelect.module.css'

function MySelect({value, onChange, options}) {
    return (
        <select value={value} onChange={onChange} className={classes.select}>
            <option className={classes.option} value={''}>Sort by</option>
            {options.map(option =>
                <option value={option.value}>{option.body}</option>
            )}
        </select>
    );
}

export default MySelect;