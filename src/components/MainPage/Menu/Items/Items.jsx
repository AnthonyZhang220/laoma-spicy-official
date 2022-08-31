import React from 'react';

import { connect } from 'react-redux'
import { addToCart } from '../../../../redux/Cart/cartActions'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import './Items.scss'

const Items = ({ itemdetails, addToCart }) => {
    return (
        <Box className="section_center">
            {itemdetails.map((menuItem) => {
                const { id, title, images, description, price } = menuItem;

                return (
                    <Card sx={{
                        maxWidth: 325,
                        boxShadow: "rgb(0 0 0 / 10%) 0px 10px 50px",
                        "&:hover": {
                            transform: "scale(1.05)",
                            transition: "0.5s ease-in-out"
                        }
                    }} key={id}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="225"
                                image={images}
                                alt="green iguana"
                                sx={{
                                    "&:hover": {
                                        transform: "scale(1.05)",
                                        transition: "0.5s ease-in-out"
                                    }
                                }}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {title}
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div">
                                    ${price}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
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