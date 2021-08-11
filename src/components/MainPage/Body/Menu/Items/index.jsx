import React from 'react';

const Items = ({items})=> {
    return (
        <div className="section-center">
            {items.map((menuItem)=>{
                const {id, title, images, description, price} = menuItem;

                return (
                    <article key={id} className='menu-items'>
                        <img src={images} alt={title} className='photo'/>
                        <div className='item-info'>
                            <header>
                                <h4>{title}</h4>
                                <h4 className='price'>${price}</h4>
                            </header>
                            <p className='item-text'>{description}</p>
                        </div>
                    </article>
                );
            })}
            </div>
            );
        };

export default Items;