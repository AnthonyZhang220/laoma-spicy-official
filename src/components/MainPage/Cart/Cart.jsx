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
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';

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
                        {cartCount > 0 ?
                            <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
                                <Typography variant="h4" className="cart_title">
                                    Your Order
                                </Typography>
                                <Box className="cart_title_underline" sx={{
                                    width: "5rem",
                                    height: "0.25rem",
                                    backgroundColor: "#000000",
                                    margin: "0 auto"
                                }}></Box>
                                <Box className="cart_section">
                                    <List>
                                        {cart.map((cart_items, index) => {
                                            const { uniqueID, title, price, description } = cart_items;

                                            return (
                                                <React.Fragment>
                                                    <ListItem key={index} className="cart_item" disablePadding
                                                        secondaryAction={
                                                            <IconButton edge="end" aria-label="delete" onClick={() => removeFromCart(uniqueID)}>
                                                                <DeleteIcon />
                                                            </IconButton>
                                                        }>
                                                        <ListItemButton component="a" href="#simple-list">
                                                            <ListItemText primary={title} secondary={description} />
                                                        </ListItemButton>
                                                    </ListItem>
                                                    <Box className="cart_header">
                                                        <Typography variant="body1" className="cart_item_price">{price}</Typography>
                                                    </Box>
                                                </React.Fragment>

                                            )
                                        })}
                                    </List>
                                </Box>
                                <Box className="cart_detail">
                                    <Box className="total_sum">
                                        <Stack spacing={2}>
                                            <Typography variant="h5">
                                                Total before Tax: {cartSum.toFixed(2)}
                                            </Typography>
                                            <Typography variant="h5">
                                                Tax Estimate(NY 8.875%): {(cartSum * tax).toFixed(2)}
                                            </Typography>
                                            <Typography variant="h5">
                                                *Estimated Total: {(cartSum + cartSum * tax).toFixed(2)}
                                            </Typography>
                                        </Stack>
                                        <Button className="cart_placeorder" variant="contained" onClick={() => console.log('Order Placed!')}>
                                            Place Order
                                        </Button>
                                    </Box>
                                </Box>
                            </Box> :
                            <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
                                <Box sx={{ textAlign: "center" }}>
                                    <ShoppingCartIcon sx={{ fontSize: 100 }} />
                                    <Typography variant="h5">
                                        No item in cart.
                                    </Typography>
                                    <Typography variant="h5">
                                        Add items from Menu.
                                    </Typography>

                                </Box>
                            </Box>
                        }
                    </StyledBox>
                </SwipeableDrawer>
            </Root>
            <Box className="cart_icon">
                {
                    cartCount > 0 ?
                        <Button variant="contained" aria-label="shopping cart" size="large" sx={{ backgroundColor: "#000000", color: "white", borderRadius: "500px", }} className="cart_icon" onClick={toggleDrawer(true)} startIcon={<ShoppingCartIcon />}>
                            View Cart • {cartCount}
                        </Button> : null
                }
            </Box>
        </React.Fragment >
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