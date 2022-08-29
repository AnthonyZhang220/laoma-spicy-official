import React from 'react';
import '../Menu.scss'

import { connect } from 'react-redux'
import { addToCart } from '../../../../redux/Cart/cartActions'

const Items = ({ itemdetails, addToCart }) => {
    return (
        <div className="section_center">
            {itemdetails.map((menuItem) => {
                const { id, title, images, description, price } = menuItem;

                return (
                    <div key={id} className="menu_items">
                        <img src={images} alt={title} className="photo" />
                        <div className="item_info">
                            <header>
                                <h4>{title}</h4>
                                <h4 className="price">${price}</h4>
                            </header>
                            <p className="item_text">{description}</p>
                            <button onClick={() => addToCart(id)} className="addtocart">Add to Cart</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
}
export default connect(null, mapDispatchToProps)(Items);