import React, { useState } from 'react';
import styles from './index.module.css';

function Cart() {
    const [click,setClick] = useState(false);
    
    const handleClick = () => setClick(!click)

    return (
        <>
          <div className={`${click && styles.active} ${styles.cart}`}>
                <h2 className={styles.text_cart}>
                    Cart Component.....</h2>
            </div>
            <div className={`${click && styles.active} ${styles.cart_icon}`} onClick={handleClick}>
                    <i
                        className={"fas fa-shopping-cart"}
                    ></i>
                </div>
          
        </>
    )
}

export default Cart;