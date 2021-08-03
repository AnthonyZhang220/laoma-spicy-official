import React, {useState} from 'react';
import items from "../../../data/items";
import Categories from "./Categories";
import Items from "./Items";
import {Route} from "react-router-dom";
import {NavItems} from "../../HeaderNav/NavItems/NavItems";
import './index.css'

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
            <Route path={NavItems.title} component={Menu}/>
            <section className='menu section'>
                <Categories categories={categories} filterItems={filterItems}/>
                <Items items={menuItems}/>
            </section>
        </main>
    );
}


export default Menu;