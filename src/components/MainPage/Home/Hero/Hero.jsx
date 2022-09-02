import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';



export default function Hero() {

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
                            gridArea: "2 / 2 / 5 / 6",
                            paddingLeft: "20px",
                            paddingRight: "20px",
                            display: "flex",
                            justifyContent: "center",
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
                                }}>
                                <Typography variant='h1' style={{ display: "inline-flex" }}>
                                    Lao Ma Spicy
                                </Typography>
                                <Typography variant='h2' style={{ display: "inline-flex" }}>
                                    Sichuan Restaurant
                                </Typography>
                                <Typography variant='h4' style={{ display: "inline-flex" }}>
                                    Authentic spicy dry hot pot &
                                </Typography>
                                <Typography variant='h4' style={{ display: "inline-flex" }}>
                                    spicy hot stew in NOHO, NYC
                                </Typography>
                            </Box>
                            <Box className="hero-delivery-icon-container" sx={{ p: 1, m: 1 }}>
                                <Box className='hero-delivery-icon'>
                                    <Stack spacing={2} direction="row">
                                        <Box className="hero-order-button">
                                            <Button variant='contained' sx={{ fontSize: 20, borderRadius: "500px", backgroundColor: "#121212", color:"#ffffff" }} component="a" href="https://qmenu.us/#/lao-ma-spicy-new-york">
                                                Order Now
                                            </Button>
                                        </Box>
                                        <a href="https://www.ubereats.com/store/lao-ma-spicy-%E8%80%81%E5%AA%BD%E9%BA%BB%E8%BE%A3%E7%87%99/7BL09unDTgOoPhVr8lEmVw" target="_blank" rel='noreferrer'>
                                            <img src="./images/icons/ubereats.png" alt="ubereats" height="50px" width="50px" />
                                        </a>
                                        <a href='https://www.facebook.com/laomaspicy/' target="_blank" rel='noreferrer'>
                                            <img src="./images/icons/hungrypanda.webp" alt="hungrypanda" height="50px" width="50px" style={{ borderRadius: "10px" }} />
                                        </a>
                                    </Stack>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}
