import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

export default function Map() {
    return (
        <Box className="map" sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", margin: "0 0" }}>
            <Box sx={{ display: "flex", m: 1, p: 1 }}>
                <Typography variant="h4">
                    Find us on:
                </Typography>
                <Stack spacing={2} sx={{ ml: 1 }} direction="row">
                    <a href='https://www.instagram.com/laomaspicy/' target="_blank" rel='noreferrer'>
                        <img src="./images/icons/instagram.png" alt="instagram" height="50px" width="50px" />
                    </a>
                    <a href='https://www.facebook.com/laomaspicy/' target="_blank" rel='noreferrer'>
                        <img src="./images/icons/facebook.png" alt="facebook" height="50px" width="50px" />
                    </a>
                    <a href='https://www.yelp.com/biz/laoma-spicy-new-york-2' target="_blank" rel='noreferrer'>
                        <img src="./images/icons/yelp.png" alt="yelp" height="50px" width="50px" />
                    </a>
                </Stack>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", height: "100%", width: "100%" }}>
                <iframe title="Google Map" width="100%" height="100%" style={{ border: 0, borderRadius: "18px", boxShadow: "rgb(0 0 0 / 10%) 0px 10px 50px", }} loading="lazy" allowFullScreen src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ6djjiDNZwokRX2L_gDfCLJM&key=${process.env.REACT_APP_GOOGLE_MAP_API}`}></iframe>
            </Box>
        </Box >
    )
}
