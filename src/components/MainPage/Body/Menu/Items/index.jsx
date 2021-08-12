import React from 'react';
import styles from '../index.module.css';

const Items = ({items})=> {
    return (
        <div className={styles.section_center}>
            {items.map((menuItem)=>{
                const {id, title, images, description, price} = menuItem;

                return (
                    <article key={id} className={styles.menu_items}>
                        <img src={images} alt={title} className={styles.photo}/>
                        <div className={styles.item_info}>
                            <header>
                                <h4>{title}</h4>
                                <h4 className={styles.price}>${price}</h4>
                            </header>
                            <p className={styles.item_text}>{description}</p>
                        </div>
                    </article>
                );
            })}
            </div>
            );
        };

export default Items;