import React from 'react'
import { Box } from '@mui/material'
import Time from '../Time/Time'
import Map from '../Map/Map'
import Typography from '@mui/material'
import Grid from '@mui/material/Grid';
import Review from '../Review/Review'

export default function Info() {
    return (
        <Grid className="info" container sx={{ pt: "100px", pb: "100px", backgroundColor: "#f2f3f4", gap: "2rem 2rem", display: "flex", justifyContent: 'center', alignItem: "center", maxWidth: "1400px", margin: "0 auto",}}>
            {/* <Grid className="info-grid-container" item sx={{
                display: "flex", justifyContent: 'center', alignItem: "center", gap: "2rem 4rem", margin: "0 auto", maxWidth: "1400px"
            }}> */}
            <Grid item sx={{ m: 1, p: 1 }} className="review-grid-item" component={Review}>
            </Grid >
            <Grid item sx={{ m: 1, p: 1, display: "flex", flexDirection: "column" }} className="map-grid-item" component={Map}>
            </Grid>
        </Grid>
        // </Grid >
    )
}
