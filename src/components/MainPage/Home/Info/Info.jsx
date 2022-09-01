import React from 'react'
import { Box } from '@mui/material'
import Time from '../Time/Time'
import Map from '../Map/Map'
import Typography from '@mui/material'
import Grid from '@mui/material/Grid';
import Review from '../Review/Review'

export default function Info() {
    return (
        <Box className="info" sx={{ pt: "100px", pb: "100px", backgroundColor: "#f2f3f4", display: "flex" }}>
            <Grid className="info-grid-container" item sx={{
                display: "flex", justifyContent: 'center', alignItem: "center", gap: "2rem 4rem", margin: "0 auto", maxWidth: "1400px"
            }}>
                <Grid item xs={6} md={12} sx={{ m: 1, p: 1, display: "flex", justifyContent: 'center', alignItem: "center" }} className="review-grid-item">
                    <Review />
                </Grid >
                <Grid item xs={6} md={12} sx={{ m: 1, p: 1, display: "flex", justifyContent: 'center', alignItem: "center" }} className="map-grid-item">
                    <Map />
                </Grid>
            </Grid>
        </Box >
    )
}
