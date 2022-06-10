import classes from './Header.module.css';
import React, {Fragment} from "react";

import mealImg from './../../assets/meals.jpg';

const Header = () => {

    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={mealImg} alt="A table full of food"/>
            </div>
        </Fragment>
    );

};
export default Header;