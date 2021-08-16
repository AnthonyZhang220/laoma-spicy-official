import React, {useState} from 'react';
import items from './Items/items';
import Categories from "./Categories";
import Items from "./Items";


const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function Menu() {
    const [menuItems, setMenuItems] = useState(items);
    const [categories] = useState(allCategories);

    const filterItems = (category) => {
        if (category === 'all') {
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
    };

    return (
        <main>
            <section className='menu section'>
                <div>
                <Categories categories={categories} filterItems={filterItems}/>
                <Items items={menuItems}/>
                </div>
            </section>
        </main>
    );
}


export default Menu;