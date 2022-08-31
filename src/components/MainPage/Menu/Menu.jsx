import React, { useState } from 'react';
import { itemdetails } from './Items/itemdetails.js';
import Categories from "./Categories/Categories";
import Items from "./Items/Items.jsx";
import Box from '@mui/material/Box';

import './Menu.scss';

const allCategories = ['all', ...new Set(itemdetails.map((item) => item.category))];

function Menu() {
    const [menuItems, setMenuItems] = useState(itemdetails);
    const [categories] = useState(allCategories);

    const filterItems = (category) => {
        if (category === 'all') {
            setMenuItems(itemdetails);
            return;
        }
        const newItems = itemdetails.filter((item) => item.category === category);
        setMenuItems(newItems);
    };

    return (
        <section className="menu">
            <Box className="menu-container">
                <Categories categories={categories} filterItems={filterItems} />
                <Items itemdetails={menuItems} />
            </Box>
        </section>
    );
}


export default Menu;