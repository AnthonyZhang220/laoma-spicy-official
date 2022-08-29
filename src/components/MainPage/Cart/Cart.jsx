import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { removeFromCart } from '../../../redux/Cart/cartActions';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import './Cart.scss';



const Root = styled('div')(({ theme }) => ({
    height: '100%',
}));


const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    borderRadius: 18,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
}));

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#424242',
}));


const Cart = ({ cart, removeFromCart }) => {
    const drawerBleeding = 20;


    const [cartCount, setCartCount] = useState(0);
    const [cartSum, setCartSum] = useState(0);
    const [open, setOpen] = React.useState(false);
    const tax = 0.0875;

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    useEffect(() => {
        let count = 0;
        cart.forEach(item => {
            count += item.qty;
        });

        setCartCount(count)

    }, [cart, cartCount]);

    useEffect(() => {
        let sum = 0;
        cart.forEach(item => {
            sum += item.price;
        });

        setCartSum(sum)

    }, [cart, cartSum])

    return (
        <React.Fragment>
            <Root>
                <CssBaseline />
                <SwipeableDrawer
                    className="cart"
                    anchor="bottom"
                    open={open}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                    swipeAreaWidth={drawerBleeding}
                    elevation={10}
                    transitionDuration={{ enter: 1000, exit: 500 }}
                    disableSwipeToOpen={false}
                    sx={{
                        '&.MuiDrawer-root > .MuiPaper-root': {
                            height: `calc(90% - ${drawerBleeding}px)`,
                            overflow: 'visible',
                        },
                    }}
                >
                    <StyledBox
                        sx={{
                            position: 'absolute',
                            top: -drawerBleeding,
                            borderTopLeftRadius: 18,
                            borderTopRightRadius: 18,
                            visibility: 'visible',
                            right: 0,
                            left: 0,
                        }}
                    >
                        <Puller />
                        <Typography sx={{ p: 2 }}></Typography>
                    </StyledBox>
                    <StyledBox
                        sx={{
                            px: 2,
                            pb: 2,
                            height: '100%',
                            overflow: 'auto',
                            '&::-webkit-scrollbar-track': {
                                backgroundColor: 'transparent',
                            },
                            '&::-webkit-scrollbar-thumb': {
                                backgroundColor: '#d6dee1',
                                borderRadius: '20px',
                                border: '2px solid transparent',
                                backgroundClip: 'content-box',
                            },

                            '&::-webkit-scrollbar-thumb:hover': {
                                backgroundColor: '#a8bbbf',
                            },

                            '&::-webkit-scrollbar': {
                                width: '14px',
                            },
                        }}
                    >
                        <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
                            <h2 className="cart_title">
                                Your Order
                            </h2>
                            <div className="cart_title_underline"></div>
                            <div className="cart_section">
                                {cart.map((cart_items, index) => {
                                    const { uniqueID, title, price } = cart_items;

                                    return (
                                        <div key={index} className="cart_item">
                                            <div className="cart_header">
                                                <h4>{title}</h4>
                                                <h4 className="cart_item_price">${price}</h4>
                                                <button onClick={() => removeFromCart(uniqueID)} className="delete"><i className='fas fa-trash-alt'></i></button>
                                            </div>
                                        </div>

                                    )
                                })}
                            </div>
                            <div className="cart_detail">
                                <div className="total_sum">Total before Tax:</div><div>${(cartSum).toFixed(2)}</div>
                                <div>Tax Estimate(NY 8.875%):</div>
                                <div>${(cartSum * tax).toFixed(2)}</div>
                                <div>*Estimated Total:</div>
                                <div>${(cartSum + cartSum * tax).toFixed(2)}</div>

                                <button className="cart_placeorder" onClick={() => console.log('Order Placed!')}>
                                    Place Order
                                </button>
                            </div>
                        </Box>
                    </StyledBox>
                </SwipeableDrawer>
            </Root>
            <Box className="cart_icon">
                <IconButton aria-label="shopping cart" size='large' edge="start" onClick={toggleDrawer(true)}>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartIcon sx={{ fontSize: 35 }} />
                    </Badge>
                </IconButton>
            </Box>
        </React.Fragment>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (uniqueID) => dispatch(removeFromCart(uniqueID))
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart.cart,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);