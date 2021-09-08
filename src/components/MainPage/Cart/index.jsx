import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { removeFromCart } from '../../../redux/Cart/cartActions';
import styles from './index.module.css';


const Cart = ({ cart, removeFromCart }) => {
    const [cartCount, setCartCount] = useState(0);
    const [cartSum, setCartSum] = useState(0);
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const tax = 0.0875;

    useEffect(() => {
        let count = 0;
        cart.forEach(item => {
            count += item.qty;
        });

        setCartCount(count)

    }, [cart, cartCount]);

    useEffect(() => {
        let sum = 0;
        cart.forEach(item => {
            sum += item.price;
        });

        setCartSum(sum)

    }, [cart, cartSum])

    return (
        <>
            <div className={`${click && styles.active} ${styles.cart}`}>
                <h2 className={styles.cart_title}>
                    Your Order</h2>
                <div className={styles.cart_title_underline}></div>
                <div className={styles.cart_section}>
                    {cart.map((cart_items, index) => {
                        const { uniqueID, title, price, description } = cart_items;

                        return (
                            <div key={index} className={styles.cart_item}>
                                <div className={styles.cart_header}>
                                    <h4>{title}</h4>
                                    <h4 className={styles.cart_item_price}>${price}</h4>
                                    <button onClick={() => removeFromCart(uniqueID)} className={styles.delete}><i className='fas fa-trash-alt'></i></button>
                                </div>
                            </div>

                        )
                    })}
                </div>
                <div className={styles.cart_detail}>
                    <div className={styles.total_sum}>Total before Tax:</div><div>${(cartSum).toFixed(2)}</div>
                    <div>Tax Estimate(NY 8.875%):</div>
                    <div>${(cartSum * tax).toFixed(2)}</div>
                    <div>*Estimated Total:</div>
                    <div>${(cartSum + cartSum * tax).toFixed(2)}</div>

                    <button className={styles.cart_placeorder} onClick={() => console.log('Order Placed!')}>
                        Place Order
                    </button>
                </div>

            </div>
            <div className={`${click && styles.active} ${styles.cart_icon}`} onClick={handleClick}>
                <i
                    className={`${click ? `lni lni-cart-full` : `lni lni-cart`}`}
                ></i>
                {/* <div className={styles.cart_count}>{cartCount}</div> */}
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