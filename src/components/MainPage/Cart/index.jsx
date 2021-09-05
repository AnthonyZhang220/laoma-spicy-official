import React, { Component } from 'react';
import styles from './index.module.css';

class Cart extends Component {
    render() {
        return (
            <div className={styles.cart}>
                <h2 className={styles.text_cart}>
                    Cart Component.....</h2> 
            </div>
                
        )
    }
}

export default Cart;