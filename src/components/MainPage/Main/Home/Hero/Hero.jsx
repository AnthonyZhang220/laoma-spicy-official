import React from 'react'
import Box from '@mui/material/Box';
import ubereats from './ubereats.png';
import yelp from './yelp.png';
import instagram from './instagram.png';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';

export default function Hero() {
    const handleBookTable = () => {

    }

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
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                    }}>
                    <Box className="hero-text-wrapper"
                        sx={{
                            gridArea: "2 / 2 / 5 / 5",
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
                                            <Button variant='contained' sx={{ fontSize: 20, borderRadius: "8px" }}>
                                                Order Now
                                            </Button>
                                        </Box>
                                        <a href="https://www.ubereats.com/store/lao-ma-spicy-%E8%80%81%E5%AA%BD%E9%BA%BB%E8%BE%A3%E7%87%99/7BL09unDTgOoPhVr8lEmVw" target="_blank" rel='noreferrer'>
                                            <img src={ubereats} alt="ubereats" height="50px" width="50px" />
                                        </a>
                                        <a href='https://www.yelp.com/biz/laoma-spicy-new-york-2' target="_blank" rel='noreferrer'>
                                            <img src={yelp} alt="yelp" height="50px" width="50px" />
                                        </a>
                                        <a href='https://www.instagram.com/laomaspicy/' target="_blank" rel='noreferrer'>
                                            <img src={instagram} alt="instagram" height="50px" width="50px" />
                                        </a>
                                    </Stack>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="hero-book-table"
                        sx={{
                            gridArea: "5 / 2 / 5 / 7",
                            paddingLeft: "20px",
                            paddingRight: "20px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                        <Card elevation={2}
                            sx={{
                                borderRadius: "18px",
                                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                                m: 1,
                                p: 1,
                            }}>
                            <CardContent sx={{ m: 1, p: 1 }}>
                                <Box sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                }}>
                                    <TextField id="outlined-basic" label="Date" variant="outlined" />
                                    <TextField id="outlined-basic" label="Time" variant="outlined" />
                                    <TextField id="outlined-basic" label="" variant="outlined" />
                                    <Button variant="outlined" onClick={handleBookTable}>
                                        Book a Table
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}
