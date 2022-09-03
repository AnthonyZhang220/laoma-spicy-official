import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import './Categories.scss';

const Categories = ({ categories, filterItems }) => {
    const [isSticky, setIsSticky] = useState(false);
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        
    })

    return (
        <Box className="btn_container" sx={{ position: isSticky ? "fixed" : "relative" }}>
            <Box sx={{ borderBottom: 2, borderColor: "divider" }}>
                <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto">
                    {categories.map((category, index) => {
                        return (
                            <Tab
                                className="filter_tabs"
                                key={index}
                                label={category}
                                onClick={() => filterItems(category)}
                                wrapped
                                value={index}
                                sx={{ fontSize: 20 }}
                            />
                        );
                    })}
                </Tabs>
            </Box>
        </Box>
    );
};

export default Categories;