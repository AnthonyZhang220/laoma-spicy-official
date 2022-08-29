import React from 'react';
import '../Menu.scss';

const Categories = ({ categories, filterItems }) => {
    return (
        <div className="btn_container">
            {categories.map((category, index) => {
                return (
                    <button
                        type="button"
                        className="filter_btn"
                        key={index}
                        onClick={() => filterItems(category)}
                    >
                        {category}
                    </button>
                );
            })}
        </div>
    );
};

export default Categories;