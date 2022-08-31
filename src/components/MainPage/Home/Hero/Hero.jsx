import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';



export default function Hero() {

    function getDate() {
        const date = new Date();
        const today = date.toISOString().split('T')[0];

        return today;
    }

    function getTime() {
        const date = new Date();
        const hour = ('00' + date.getHours()).slice(-2);
        const minute = ('00' + date.getMinutes()).slice(-2);
        const currentTime = hour + ":" + minute;

        return currentTime;
    }

    const [input, setInput] = useState({
        name: "",
        date: getDate(),
        time: getTime(),
        phone: "",
        people: 1,
    });


    const formSettings = [
        {
            name: "name",
            id: "form-name",
            label: "Name",
            variant: "outlined",
            type: "text",
            autoComplete: "name"
        },
        {
            name: "date",
            id: "form-date",
            label: "Date",
            variant: "outlined",
            type: "date",
            autoComplete: "date",
            min: getDate(),
        },
        {
            name: "time",
            id: "form-time",
            label: "Time",
            variant: "outlined",
            type: "time",
            autoComplete: "time",
            min: getTime(),
        },
        {
            name: "phone",
            id: "form-phone",
            label: "Phone Number",
            variant: "outlined",
            type: "tel",
            autoComplete: "tel"
        },
        {
            name: "people",
            id: "form-people",
            label: "Number of People",
            variant: "outlined",
            type: "number",
            autoComplete: "number",
            min: 1,
            max: 15,
        },
    ]

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }

    const handleFormInput = (e) => {
        const { name, date, time, phone, people, value } = e.target;

        setInput({
            ...input,
            [name]: value,
            [date]: value,
            [time]: value,
            [phone]: value,
            [people]: value,
        })
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
                        backgroundSize: "fill",
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
                                            <Button variant='contained' sx={{ fontSize: 20, borderRadius: "8px" }} component="a" href="https://qmenu.us/#/lao-ma-spicy-new-york">
                                                Order Now
                                            </Button>
                                        </Box>
                                        <a href="https://www.ubereats.com/store/lao-ma-spicy-%E8%80%81%E5%AA%BD%E9%BA%BB%E8%BE%A3%E7%87%99/7BL09unDTgOoPhVr8lEmVw" target="_blank" rel='noreferrer'>
                                            <img src="./images/icons/ubereats.png" alt="ubereats" height="50px" width="50px" />
                                        </a>
                                        <a href='https://www.yelp.com/biz/laoma-spicy-new-york-2' target="_blank" rel='noreferrer'>
                                            <img src="./images/icons/yelp.png" alt="yelp" height="50px" width="50px" />
                                        </a>
                                        <a href='https://www.instagram.com/laomaspicy/' target="_blank" rel='noreferrer'>
                                            <img src="./images/icons/instagram.png" alt="instagram" height="50px" width="50px" />
                                        </a>
                                        <a href='https://www.facebook.com/laomaspicy/' target="_blank" rel='noreferrer'>
                                            <img src="./images/icons/facebook.png" alt="facebook" height="50px" width="50px" />
                                        </a>
                                        <a href='https://www.facebook.com/laomaspicy/' target="_blank" rel='noreferrer'>
                                            <img src="./images/icons/hungrypanda.webp" alt="hungrypanda" height="50px" width="50px" style={{ borderRadius: "10px" }} />
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
                        <Card elevation={0}
                            sx={{
                                borderRadius: "18px",
                                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                                m: 1,
                                p: 1,
                            }}>
                            <Grid
                                component="form"
                                container
                                sx={{
                                    '& > :not(style)': { p: 2, width: '25ch' },
                                }}>
                                {
                                    formSettings?.map(({ id, label, type, name, autoComplete, variant, max, min }, index) => (
                                        <Grid item xs={12} md={4} textAlign="center" key={index} >
                                            <TextField
                                                key={index}
                                                fullWidth={true}
                                                name={name}
                                                id={id}
                                                required
                                                label={label}
                                                variant={variant}
                                                autoComplete={autoComplete}
                                                type={type}
                                                size="small"
                                                value={input[name]}
                                                onChange={e => handleFormInput(e)}
                                                inputProps={{
                                                    max: max ? max : null,
                                                    min: min ? min : null,
                                                }
                                                }
                                            />
                                        </Grid>
                                    ))
                                }
                                <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: "start" }}>
                                    <Button variant="outlined" type="submit" onClick={e => handleFormSubmit(e)}>
                                        Book a Table
                                    </Button>
                                </Grid>
                            </Grid>
                        </Card>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}
