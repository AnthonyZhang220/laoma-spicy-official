import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function Booking() {

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
        <Box className="book-table"
            sx={{
                backgroundColor: "#f2f3f4"
            }}>
            <Box className="book-table-flex-container"
                sx={{
                    margin: "0 auto",
                    maxWidth: "1200px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    p: "30px",
                    
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
    )
}
