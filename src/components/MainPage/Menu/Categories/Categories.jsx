import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import './Categories.scss';

const Categories = ({ categories, filterItems }) => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box className="btn_container" >
            <Box className="menu_header"></Box>
            <Box className='categories' sx={{ borderBottom: 2, borderColor: "divider" }}>
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