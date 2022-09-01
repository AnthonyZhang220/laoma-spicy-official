import React from 'react';
import { timedetails } from './timedetails';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import "./Time.scss";
import { Typography } from '@mui/material';


export default function Time() {
    return (
        <Grid className="time-grid-container" container
            sx={{
            }}>
            {
                timedetails?.map(({ day, time }, index) => (
                    <Grid
                        container
                        textAlign="center"
                        direction="row"
                        key={index}
                        sx={{ p: 1 }}>
                        <Grid item xs={5}>
                            <Typography variant='body1'>
                                {day}
                            </Typography>
                        </Grid>
                        <Grid item xs={7}>
                            <Typography variant='body1'>
                                {time}
                            </Typography>
                        </Grid>
                    </Grid>
                ))
            }
        </Grid>
    )
}
