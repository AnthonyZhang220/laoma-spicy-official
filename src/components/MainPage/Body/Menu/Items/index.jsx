import React from 'react';
import styles from '../index.module.css'

import { connect } from 'react-redux'
import { addToCart } from '../../../../../redux/Cart/cartActions'

const Items = ({ items, addToCart }) => {
    return (
        <div className={styles.section_center}>
            {items.map((menuItem) => {
                const { id, title, images, description, price } = menuItem;

                return (
                    <div key={id} className={styles.menu_items}>
                        <img src={images} alt={title} className={styles.photo} />
                        <div className={styles.item_info}>
                            <header>
                                <h4>{title}</h4>
                                <h4 className={styles.price}>${price}</h4>
                            </header>
                            <p className={styles.item_text}>{description}</p>
                            <button onClick={()=> addToCart(id)} class={styles.addtocart}>Add to Cart</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return{
        addToCart: (id) => dispatch(addToCart(id))
    }
}
export default connect(null, mapDispatchToProps)(Items);