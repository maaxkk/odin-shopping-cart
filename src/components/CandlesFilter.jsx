import React from 'react';
import MyRadio from "./UI/Radio/MyRadio.jsx";
import classes from '../styles/CandlesFilter.module.css'

function CandlesFilter({categories, filter, setFilter}) {

    function handleChange(e) {
        setFilter(prevFilter => (
            {...prevFilter, category: e.target.value}
        ))
    }

    return (
        <div className={classes.filter}>
            {categories.map(category =>
                <MyRadio key={category}
                         name={'category'}
                         category={category}
                         value={category}
                         onChange={handleChange}
                         checked={filter.category === category}
                         type={'radio'}/>
            )}
        </div>
    );
}

export default CandlesFilter;