import React from 'react';
import { timedetails } from './timedetails';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import "./Time.scss";
import { Typography } from '@mui/material';


export default function Time() {
    return (
        <Box className="time">
            <Grid className="time-grid-container" container
                justifyContent="center"
                alignItems="center"
                direction="column" sx={{ p: 1, m: 1, backgroundColor: "white", borderRadius: "18px", textAlign: "center", }}>
                {
                    timedetails?.map(({ day, time }, index) => (
                        <Grid
                            container
                            justifyContent="center"
                            alignItems="center"
                            direction="row"
                            xs={12}
                            key={index}
                            sx={{ p: 1 }}>
                            <Grid item xs={6}>
                                <Typography variant='h5'>
                                    {day}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant='h5'>
                                    {time}
                                </Typography>
                            </Grid>
                        </Grid>
                    ))
                }
            </Grid>
        </Box >
    )
}