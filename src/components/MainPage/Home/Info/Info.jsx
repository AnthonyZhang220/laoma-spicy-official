import React from 'react'
import { Box } from '@mui/material'
import Time from '../Time/Time'
import Map from '../Map/Map'
import Typography from '@mui/material'
import Grid from '@mui/material/Grid';

export default function Info() {
    return (
        <Box className="info" sx={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: 'center', alignItem: "center", pt: "100px", pb: "100px", backgroundColor: "#eaddad" }}>
            <Grid className="info-grid-container" container direction="row" sx={{
                maxWidth: "1400px",
                margin: "0 auto"
            }}>
                <Grid item xs={12} md={6} sx={{ m: 2, p: 2, }} className="time-grid-item">
                    <Time />
                </Grid >
                <Grid item xs={12} md={6} sx={{ m: 2, p: 2, }} className="map-grid-item">
                    <Map />
                </Grid>
            </Grid>
        </Box >
    )
}
