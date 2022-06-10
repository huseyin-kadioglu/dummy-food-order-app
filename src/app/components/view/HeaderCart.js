import CartIcon from "../layout/CartIcon";
import classes from './HeaderCart.module.css';

const HeaderCart = () => {

    return (
        <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>
                3
            </span>
        </button>
    );
};
export default HeaderCart;