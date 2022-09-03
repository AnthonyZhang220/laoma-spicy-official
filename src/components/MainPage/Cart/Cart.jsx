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
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';


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

const NoItemCart = () => {
    return (
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
    )
}



const Cart = ({ cart, removeFromCart }) => {
    const drawerBleeding = 20;

    const fullScreen = useMediaQuery(`(max-width: 800px)`);


    const [cartCount, setCartCount] = useState(0);
    const [cartSum, setCartSum] = useState(0);
    const [open, setOpen] = useState(false);
    const tax = 0.0875;

    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

    const handleCheckoutOpen = () => {
        setIsCheckoutOpen(true);
        setOpen(false);
    }



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
                        zIndex: 2002,
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
                                    margin: "0 auto",
                                    marginTop: "1rem",
                                    marginBottom: "1rem",
                                }}></Box>
                                <Box className="cart_section" sx={{ m: 1, p: 1 }}>
                                    <List sx={{ margin: "0 auto", maxWidth: "1200px" }}>
                                        {cart.map((cart_items, index) => {
                                            const { uniqueID, title, price, description } = cart_items;

                                            return (
                                                <React.Fragment key={index}>
                                                    <ListItem className="cart_item" disablePadding alignItems='flex-start'
                                                        secondaryAction={
                                                            <IconButton edge="end" aria-label="delete" onClick={() => removeFromCart(uniqueID)}>
                                                                <DeleteIcon />
                                                            </IconButton>
                                                        }>
                                                        <ListItemButton>
                                                            <ListItemText primary={title} primaryTypographyProps={{ variant: "h6" }} secondary={`$${price}`} secondaryTypographyProps={{ variant: "body1" }} />
                                                            <ListItemText primary={description} />
                                                        </ListItemButton>
                                                    </ListItem>
                                                </React.Fragment>

                                            )
                                        })}
                                    </List>
                                    <Box className="cart_checkout_button" sx={{
                                        position: "fixed",
                                        left: "50%",
                                        bottom: "1%",
                                        transform: "translate(-50%, -50%)",
                                    }}>
                                        <Button variant="contained" aria-label="checkout" size="large" sx={{ backgroundColor: "#000000", color: "white", borderRadius: "500px", }} className="checkout_icon" onClick={handleCheckoutOpen} startIcon={<ShoppingCartCheckoutIcon />}>
                                            Checkout • ${cartSum.toFixed(2)}
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                            :
                            <NoItemCart />
                        }
                    </StyledBox>
                </SwipeableDrawer>
            </Root>
            <Dialog
                fullScreen={fullScreen}
                open={isCheckoutOpen}
                onClose={() => setIsCheckoutOpen(false)}
                className="checkout"
                sx={{ zIndex: 5000 }}
            >
                <DialogTitle variant="h4" component="div">
                    Your items
                </DialogTitle>
                <CloseIcon onClick={() => setIsCheckoutOpen(false)} sx={{ cursor: "pointer", fontSize: 40, position: "absolute", top: 0, right: 0, m: 1 }} />
                <DialogContent sx={{ display: "flex", flexDirection: "column" }} >
                    <Box className="checkout-list" sx={{ p: 1, m: 1 }}>
                        <List>
                            {cart.map((cart_items, index) => {
                                const { title, price } = cart_items;

                                return (
                                    <ListItem className="cart_item" disablePadding key={index} sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <ListItemText primary={title} primaryTypographyProps={{ variant: "body1", textAlign: "start", pr: 5 }} />
                                        <ListItemText primary={`$${price}`} primaryTypographyProps={{ variant: "body1", textAlign: "end", pl: 5 }} />
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Box>
                    <Box className="cart_sum" sx={{ marginTop: "auto" }}>
                        <Box component="ul" sx={{
                            p: 0,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            "& > li": {
                                m: 1,
                                p: 1,
                            }
                        }}>
                            <Box component="li" sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Box>
                                    <Typography variant="h5">
                                        Subtotal
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h5">
                                        ${cartSum.toFixed(2)}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box component="li" sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Box>
                                    <Typography variant="h5">
                                        Taxes
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h5">
                                        ${(cartSum * tax).toFixed(2)}
                                    </Typography>
                                </Box>
                            </Box>
                            <Divider />
                            <Box component="li" sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                                    Total
                                </Typography>
                                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                                    ${(cartSum + cartSum * tax).toFixed(2)}
                                </Typography>
                            </Box>
                            <Button className="cart_placeorder" variant="contained" color="success" size="large" disabled sx={{ backgroundColor: "#66bb6a", color: "#ffffff" }} onClick={() => console.log('Order Placed!')}>
                                Place Order
                            </Button>
                        </Box>
                    </Box>
                </DialogContent>
            </Dialog>
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