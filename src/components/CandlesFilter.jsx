import React from 'react';
import MyRadio from "./UI/Radio/MyRadio.jsx";
import classes from '../styles/CandlesFilter.module.css'
import MySelect from "./UI/Select/MySelect.jsx";

function CandlesFilter({categories, filter, setFilter}) {

    function handleChange(e) {
        setFilter(prevFilter => (
            {...prevFilter, category: e.target.value}
        ))
    }

    function handleSelectChange(e) {
        setFilter(prevFilter => ({...prevFilter, sort: e.target.value}))
    }

    return (
        <div className={classes.filter}>
            <div className={classes.categories}>
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
            <MySelect value={filter.sort}
                      onChange={handleSelectChange}
                      options={[
                          {value: 'priceDESC', body: 'price(DESC)'},
                          {value: 'priceASC', body: 'price(ASC)'},
                          {value: 'alphabetDESC', body: 'alphabetically(DESC)'},
                          {value: 'alphabetASC', body: 'alphabetically(ASC)'},
                      ]}
            />
        </div>
    );
}

export default CandlesFilter;