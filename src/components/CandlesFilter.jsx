import React from 'react';
import MyRadio from "./UI/Radio/MyRadio.jsx";
import classes from '../styles/CandlesFilter.module.css'
import MySelect from "./UI/Select/MySelect.jsx";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSort} from "../redux/slices/filterSlice.js";

function CandlesFilter({categories}) {

    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter)

    function handleChange(e) {
        const value = e.target.value;
        dispatch(setCategory({value}))
    }

    function handleSelectChange(e) {
        let value = e.target.value
        dispatch(setSort({value}))
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