import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useMediaQuery } from "@mui/material";



export default function Hero() {
    const isMobile = useMediaQuery('(max-width:650px)');

    return (
        <Box className="hero">
            <Box className="hero-wrapper-flex">
                <Box className="hero-center"
                    sx={{
                        position: "relative",
                        height: "100vh",
                        width: "100vw",
                        maxWidth: "100%",
                        maxHeight: "100%",
                        display: "grid",
                        gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
                        gridTemplateRows: "repeat(5, minmax(0, 1fr))",
                        background: "url('./images/bg.jpg')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "fill",
                        backgroundPosition: "center center",
                    }}>
                    <Box className="hero-text-wrapper"
                        sx={{
                            gridArea: isMobile ? "2 / 1 / 5 / 8" : "2 / 2 / 5 / 6",
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center"
                        }}>
                        <Box className="hero-title">
                            <Box className="hero-title-line"
                                sx={{
                                    lineHeight: 1.5,
                                    overflow: "hidden",
                                    zIndex: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    m: 1,
                                    p: 1,
                                }}>
                                <Typography variant='h1' style={{ display: "inline-flex" }}>
                                    Lao Ma Spicy
                                </Typography>
                                <Typography variant='h4' style={{ display: "inline-flex" }}>
                                    Authentic spicy dry hot
                                </Typography>
                                <Typography variant='h4' style={{ display: "inline-flex" }}>
                                    pot & spicy hot stew
                                </Typography>
                            </Box>
                            <Box className="hero-delivery-icon-container">
                                <Box className='hero-delivery-icon'
                                    sx={{
                                        display: "flex",
                                        justifyContent: "flex-start",
                                        alignItems: "center",
                                        "& > div": {
                                            ml: 1,
                                            pl: 1,

                                        }
                                    }}>
                                    <Box className="hero-order-button">
                                        <Button variant='contained' sx={{ fontSize: 20, borderRadius: "500px", backgroundColor: "#121212", color: "#ffffff" }} component="a" href="https://qmenu.us/#/lao-ma-spicy-new-york">
                                            Order Now
                                        </Button>
                                    </Box>
                                    <Box>
                                        <a href="https://www.ubereats.com/store/lao-ma-spicy-%E8%80%81%E5%AA%BD%E9%BA%BB%E8%BE%A3%E7%87%99/7BL09unDTgOoPhVr8lEmVw" target="_blank" rel='noreferrer'>
                                            <img src="./images/icons/ubereats.png" alt="ubereats" height="50px" width="50px" style={{ display: "block" }} />
                                        </a>
                                    </Box>
                                    <Box>
                                        <a href='https://www.facebook.com/laomaspicy/' target="_blank" rel='noreferrer'>
                                            <img src="./images/icons/hungrypanda.webp" alt="hungrypanda" height="50px" width="50px" style={{ borderRadius: "10px", display: "block" }} />
                                        </a>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}
