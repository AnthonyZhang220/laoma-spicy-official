import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Map() {
    return (
        <Box className="map" sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Typography variant="h3">
                Map
            </Typography>
            <iframe title="Google Map" width="400" height="400" style={{ border: 0, borderRadius: "18px" }} loading="lazy" allowFullScreen src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ6djjiDNZwokRX2L_gDfCLJM&key=${process.env.REACT_APP_GOOGLE_MAP_API}`}></iframe>
        </Box>
    )
}
