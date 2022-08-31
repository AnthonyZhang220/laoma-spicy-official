import React from 'react';
import { timedetails } from './timedetails';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import "./Time.scss";


export default function Time() {
    return (
        <Box className="time-grid-container"
            sx={{ backgroundColor: "white", borderRadius: "18px", textAlign: "center", boxShadow: "rgb(0 0 0 / 10%) 0px 10px 50px", }}>
            {
                timedetails?.map(({ day, time }, index) => (
                    <>
                        <Typography variant='h5'>
                            {day}
                        </Typography>
                        <Typography variant='h5'>
                            {time}
                        </Typography>
                    </>
                ))
            }
        </Box>
    )
}
