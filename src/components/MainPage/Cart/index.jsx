import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { removeFromCart } from '../../../redux/Cart/cartActions';
import styles from './index.module.css';


const Cart = ({ cart, removeFromCart }) => {
    const [cartCount, setCartCount] = useState(0)
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)

    useEffect(() => {
        let count = 0;
        cart.forEach(item => {
            count += item.qty;
        });

        setCartCount(count)

    }, [cart, cartCount]);

    return (
        <>
            <div className={`${click && styles.active} ${styles.cart}`}>
                <div>
                    <h2 className={styles.text_cart}>
                        Your Order</h2>
                </div>
                <div className={styles.cart_items}>
                    {cart.map((cart_items, index) => {
                        const { uniqueID, title, price, description } = cart_items;

                        return (
                            <ul>
                                <li key={index}>
                                    <button onClick={() => removeFromCart(uniqueID)} className={styles.delete}><i className='fas fa-trash-alt'></i></button>{title}{price}
                                </li>
                            </ul>
                        )
                    })}
                </div>
            </div>
            <div className={`${click && styles.active} ${styles.cart_icon}`} onClick={handleClick}>
                <i
                    className={"fas fa-shopping-cart"}
                ><div className={styles.cart_count}>{cartCount}</div></i>
            </div>

        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (uniqueID) => dispatch(removeFromCart(uniqueID))
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart.cart,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);