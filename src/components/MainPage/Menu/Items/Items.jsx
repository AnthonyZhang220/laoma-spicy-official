import React, { useState } from 'react';

import { connect } from 'react-redux'
import { addToCart } from '../../../../redux/Cart/cartActions'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Rating from '@mui/material/Rating';


import './Items.scss'

function ChiliBorderIcon() {
    return (
        <img src="./images/icons/chili-border-icon.svg" alt="chili" width="20px" height="20px" />
    );
}
function ChiliIcon() {
    return (
        <img src="./images/icons/chili-icon.svg" alt="chili" width="20px" height="20px" />
    );
}

// const StyledRating = styled(Rating)({
//     '& .MuiRating-iconFilled': {
//         color: '#ff6d75',
//     },
//     '& .MuiRating-iconHover': {
//         color: '#ff3d47',
//     },
// });

const Items = ({ itemdetails, addToCart }) => {

    const [value, setValue] = useState(2);
    const [hover, setHover] = useState(-1);

    const labels = {
        // 0: 'No Spicy|免辣',
        1: 'Mild|小小辣',
        2: 'Medium|小辣',
        3: 'Spicy|中辣',
        4: 'Hot|大辣',
        5: 'Extra(numb)|特辣(麻)',
    };

    function getLabelText(value) {
        return `${value}, ${labels[value]}`;
    }

    return (
        <Box className="section_center" component="ul">
            {itemdetails.map((menuItem, index) => {
                const { id, title, images, description, price, category } = menuItem;

                return (
                    <Card elevation={4} sx={{
                        width: 325,
                        height: images === "" ? 150 : 450,
                        transition: "all 0.5s ease-in-out",
                        position: "relative",
                        "&:hover": {
                            boxShadow: "rgb(0 0 0 / 10%) 0px 10px 50px",
                            transition: "all 0.5s ease-in-out"
                        }
                    }} key={id} component="li">
                        {images === "" ? null :
                            <CardMedia
                                component="img"
                                height="225"
                                image={images}
                                alt={title}
                                sx={{
                                    transition: "all 0.5s ease-in-out",
                                    "&:hover": {
                                        transform: "scale(1.05)",
                                        transition: "all 0.5s ease-in-out"
                                    }
                                }}
                            />
                        }
                        <Box sx={{ position: "absolute", right: 0, top: 0 }}>
                            <IconButton onClick={() => addToCart(id)} >
                                <AddCircleIcon sx={{ fontSize: 40, color:"#121212" }} />
                            </IconButton>
                        </Box>
                        <CardContent>
                            <Typography variant="h6">
                                {title}
                            </Typography>
                            <Typography variant="h6">
                                ${price}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                {description}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{
                            position: "absolute",
                            bottom: "0px",
                        }}>
                            {category === "MaLaTang | 麻辣烫" ?
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        m: 1,
                                        p: 1,
                                    }}
                                >
                                    <Rating
                                        name="customized-color"
                                        value={value}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                        onChangeActive={(event, newHover) => {
                                            setHover(newHover);
                                        }}
                                        getLabelText={getLabelText}
                                        precision={1}
                                        icon={<ChiliIcon />}
                                        emptyIcon={<ChiliBorderIcon />}
                                    />
                                    {value !== null && (
                                        <Box sx={{ ml: 2 }}>
                                            <Typography variant="body1">
                                                {labels[hover !== -1 ? hover : value]}
                                            </Typography>
                                        </Box>
                                    )}
                                </Box> : null
                            }
                        </CardActions>
                        {/* <div key={id} className="menu_items">
                            <img src={images} alt={title} className="photo" />
                            <div className="item_info">
                                <header>
                                    <h4>{title}</h4>
                                    <h4 className="price">${price}</h4>
                                </header>
                                <p className="item_text">{description}</p>
                                <button onClick={() => addToCart(id)} className="addtocart">Add to Cart</button>
                            </div>
                        </div> */}
                    </Card>
                );
            })}
        </Box>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
}
export default connect(null, mapDispatchToProps)(Items);