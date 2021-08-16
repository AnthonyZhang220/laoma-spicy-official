import React from 'react';

const Items = ({items})=> {
    return (
        <div className='section_center'>
            {items.map((menuItem)=>{
                const {id, title, images, description, price} = menuItem;

                return (
                    <menuitems key={id} className='menu_items'>
                        <img src={images} alt={title} className='photo'/>
                        <div className='item_info'>
                            <header>
                                <h4>{title}</h4>
                                <h4 className='price'>${price}</h4>
                            </header>
                            <p className='item_text'>{description}</p>
                        </div>
                    </menuitems>
                );
            })}
            </div>
            );
        };

export default Items;