import React from 'react'
import { Box } from '@mui/material'
import Time from '../Time/Time'
import Map from '../Map/Map'
import Typography from '@mui/material'
import Grid from '@mui/material/Grid';
import Review from '../Review/Review'

export default function Info() {
    return (
        <Box className="info" sx={{ pt: "100px", pb: "100px", backgroundColor: "#f2f3f4" }}>
            <Grid className="info-grid-container" container sx={{
                gap: "2rem 1rem", display: "flex", justifyContent: 'center', alignItem: "center", maxWidth: "1400px", margin: "0 auto",
            }}>
                <Grid item className="review-grid-item" component={Review}>
                </Grid >
                <Grid item className="map-grid-item" component={Map}>
                </Grid>
            </Grid>
        </Box >
    )
}
