import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function Map() {
    return (
        <Grid item className="map">
            <iframe title="Google Map" width="400" height="400" style={{ border: 0, borderRadius: "18px", boxShadow: "rgb(0 0 0 / 10%) 0px 10px 50px", }} loading="lazy" allowFullScreen src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ6djjiDNZwokRX2L_gDfCLJM&key=${process.env.REACT_APP_GOOGLE_MAP_API}`}></iframe>
        </Grid>
    )
}
